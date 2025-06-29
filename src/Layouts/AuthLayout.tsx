import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <>
      <div className="h-[100dvh] flex overflow-hidden">
        <div className="flex-1 h-screen overflow-hidden relative hidden md:flex bg-primary items-center">
          <div className="px-10 space-y-20">
            <div className="space-y-4">
              <img src="/logo-white.svg" width={70} />
              <h1 className="text-5xl font-bold text-white">Cito Logistics</h1>
            </div>

            <p className="text-white/50 flex items-center">
              {" "}
              <ChevronRight /> Personal Account
            </p>
          </div>
        </div>
        <div className="flex-1/3 overflow-y-scroll">
          <main className="md:w-[480px] w-[90%] space-y-6 mx-auto md:py-10 py-6">
            <div className="space-y-4">
              <Link to="/" className="md:hidden block">
                <img src="/logo-dark.svg" alt="Cito LOGO" width={40} />
              </Link>
              <div className="mt-6 border-b border-line pb-6">
                <h1 className="text-4xl font-bold text-grad">{title}</h1>
                <p className="text-muted">{description}</p>
              </div>
            </div>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
