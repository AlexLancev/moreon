import { Outlet } from "react-router-dom";

import { Header } from "./header";
import { Footer } from "./footer";

import { Feedback_modal } from "@/components";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="block flex-auto">
        <Outlet />
        <Feedback_modal />
      </main>
      <Footer />
    </>
  );
};
