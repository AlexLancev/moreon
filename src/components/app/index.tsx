import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { paths } from "@/paths";
import { Layout } from "@/components";
import {
  About_page,
  Club_cards,
  Home_page,
  Kids_fitness_page,
  Presentation_directions_page,
  Saunas_pools_page,
  Services_page,
  Team_page,
} from "@/pages";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

const {
  home,
  about_club,
  services,
  team,
  club_cards,
  pools,
  kids_fitness,
  mind_body,
  strength_functional_training,
  aerobics,
  gym,
  pool,
  martial_arts,
  dance,
  personal_training,
  yoga,
  test,
  group_programs,
} = paths;

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={home} element={<Layout />}>
          <Route index element={<Home_page />} />
          <Route path={about_club} element={<About_page />} />
          <Route path={services} element={<Services_page />} />
          <Route path={team} element={<Team_page />} />
          <Route path={club_cards} element={<Club_cards />} />
          <Route path={pools} element={<Saunas_pools_page />} />
          <Route path={kids_fitness} element={<Kids_fitness_page />} />
          <Route path={mind_body} element={<Presentation_directions_page />} />
          <Route
            path={strength_functional_training}
            element={<Presentation_directions_page />}
          />
          <Route path={aerobics} element={<Presentation_directions_page />} />
          <Route path={gym} element={<Presentation_directions_page />} />
          <Route path={pool} element={<Presentation_directions_page />} />
          <Route
            path={martial_arts}
            element={<Presentation_directions_page />}
          />

          <Route path={dance} element={<Presentation_directions_page />} />
          <Route
            path={personal_training}
            element={<Presentation_directions_page />}
          />
          <Route path={yoga} element={<Presentation_directions_page />} />
          <Route path={test} element={<Presentation_directions_page />} />
          <Route
            path={group_programs}
            element={<Presentation_directions_page />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
