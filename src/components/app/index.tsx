import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { paths } from "paths";
import { Layout } from "components";
import {
  About_page,
  Club_cards,
  Home_page,
  Saunas_pools_page,
  Services_page,
  Team_page,
} from "pages";

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
          <Route path={paths.team} element={<Team_page />} />
          <Route path={paths.club_cards} element={<Club_cards />} />
          <Route path={paths.saunas_pools} element={<Saunas_pools_page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
