import { Outlet } from "react-router-dom";

import { Feedback_modal } from "@/components";

import { Footer } from "./footer";
import { Header } from "./header";

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
