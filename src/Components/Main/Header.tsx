import { menuItems } from "@/constants/data";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40"
          />
        )}
      </AnimatePresence>

      <header className="sticky top-4 z-50">
        <div
          className={clsx(
            "main rounded-xl backdrop-blur-md border border-line p-3 transition-all duration-200",
            isOpen ? "bg-background shadow-2xl" : "bg-background/20"
          )}
        >
          <nav className="grid grid-cols-3 items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/full-dark-logo.svg" alt="Cito Logo" width={90} />
            </Link>
            <ul className="hidden lg:flex items-center justify-center gap-6">
              {menuItems.map((x, y) => (
                <li key={y}>
                  <a
                    href={x.path}
                    className="hover:underline underline-offset-2"
                  >
                    {x.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end gap-4">
              <Link to="/login" className="hidden lg:block">
                <button className="btn btn-primary h-10 px-6 rounded-md">
                  Make Order
                </button>
              </Link>
            </div>
              <div
                onClick={toggleMenu}
                className="lg:hidden cursor-pointer ml-auto h-10 w-10 flex items-center justify-center"
              >
                {isOpen ? <X /> : <Menu />}
              </div>
          </nav>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="block space-y-4 mt-4 lg:hidden z-50"
              >
                {menuItems.map((x, y) => (
                  <li key={y} onClick={toggleMenu}>
                    <a
                      href={x.path}
                      className="block hover:bg-secondary p-2 text-center rounded-md"
                    >
                      {x.name}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
