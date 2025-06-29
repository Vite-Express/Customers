import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Login, Register } from "@/pages/auth";
import { ScrollToTop, Splash } from "@/components/ui";
const App = () => {
  return (
    <>
      <Toaster />
      <ScrollToTop />
        <Splash />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
