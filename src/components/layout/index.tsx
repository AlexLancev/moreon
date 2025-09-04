import { Outlet } from "react-router-dom";

import { FeedbackModal } from "@/components";

import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="block flex-auto">
        <Outlet />
        <FeedbackModal />
      </main>
      <Footer />
    </>
  );
};
