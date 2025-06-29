import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Splash = () => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          key="splash"
          initial={{ scaleY: 0, opacity: 0.8 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-dark h-[100dvh] origin-top-left center fixed inset-0 z-[100]"
        >
          <motion.img
            src="/full-white-logo.svg"
            alt="logo"
            width={150}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, ease: "backOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
