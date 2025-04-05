import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { paths } from "paths";
import { Layout } from "components";
import { About_page, Home_page, Services_page } from "pages";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={paths.home} element={<Layout />}>
          <Route index element={<Home_page />} />
          <Route path={paths.about_club} element={<About_page />} />
          <Route path={paths.services} element={<Services_page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
