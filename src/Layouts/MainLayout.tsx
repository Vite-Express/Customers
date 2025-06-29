import { Header } from "@/components/main";
import { Footer } from "@/components/ui";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="space-y-10 md:space-y-20 py-10">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
