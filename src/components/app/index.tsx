import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { paths } from "@/paths";
import { Layout } from "@/components";
import {
  About_page,
  Cards_presentation_page,
  Club_cards,
  Congratulations_registration,
  Current_direction_page,
  Home_page,
  Kids_fitness_page,
  Login,
  News_page,
  News_presentation_page,
  Person_team_page,
  Personal_account_page,
  Presentation_directions_page,
  Register,
  Saunas_pools_page,
  Services_page,
  Stock_page,
  Stock_presentation_page,
  Team_page,
} from "@/pages";
import { Wrapper } from "@/pages/wrapper";
import { Logout } from "@/pages/Logout";

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
  abs_streth,
  pranayama_meditation,
  yoga_intensiv_90,
  pilates_allegro,
  healthy_back,
  pilates_mat,
  soft_balance,
  hatha_yoga,
  cross_training,
  hot_iron_1,
  hot_iron_2,
  les_mills_grit,
  thinner,
  les_mills_core,
  real_ryder,
  step,
  step_pro,
  pro_jumping,
  step_interval,
  infant_swimming,
  childrens_swimming,
  school_competitive_swimming,
  swimming_adults,
  aqua_aerobics,
  aqua_mom,
  work_apparatus,
  box,
  grappling,
  kickboxing,
  mma,
  latina,
  multidance,
  oriental,
  zumba,
  dance_mix,
  children_center,
  baths_swimming,
  sports_pool,
  spa,
  thermal_baths,
  goldfish,
  person_team,
  stock,
  news,
  presentation_cards,
  stock_page,
  news_page,
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
          <Route path={gym} element={<Current_direction_page />} />
          <Route path={pool} element={<Presentation_directions_page />} />
          <Route
            path={martial_arts}
            element={<Presentation_directions_page />}
          />

          <Route path={dance} element={<Presentation_directions_page />} />
          <Route
            path={personal_training}
            element={<Current_direction_page />}
          />
          <Route path={yoga} element={<Presentation_directions_page />} />
          <Route path={test} element={<Current_direction_page />} />
          <Route
            path={group_programs}
            element={<Presentation_directions_page />}
          />
          <Route path={abs_streth} element={<Current_direction_page />} />
          <Route
            path={pranayama_meditation}
            element={<Current_direction_page />}
          />
          <Route path={yoga_intensiv_90} element={<Current_direction_page />} />
          <Route path={pilates_allegro} element={<Current_direction_page />} />
          <Route path={healthy_back} element={<Current_direction_page />} />
          <Route path={pilates_mat} element={<Current_direction_page />} />
          <Route path={soft_balance} element={<Current_direction_page />} />
          <Route path={hatha_yoga} element={<Current_direction_page />} />
          <Route path={cross_training} element={<Current_direction_page />} />
          <Route path={hot_iron_1} element={<Current_direction_page />} />
          <Route path={hot_iron_2} element={<Current_direction_page />} />
          <Route path={les_mills_grit} element={<Current_direction_page />} />
          <Route path={thinner} element={<Current_direction_page />} />
          <Route path={les_mills_core} element={<Current_direction_page />} />
          <Route path={real_ryder} element={<Current_direction_page />} />
          <Route path={step} element={<Current_direction_page />} />
          <Route path={step_pro} element={<Current_direction_page />} />
          <Route path={pro_jumping} element={<Current_direction_page />} />
          <Route path={step_interval} element={<Current_direction_page />} />
          <Route path={infant_swimming} element={<Current_direction_page />} />
          <Route
            path={childrens_swimming}
            element={<Current_direction_page />}
          />
          <Route
            path={school_competitive_swimming}
            element={<Current_direction_page />}
          />
          <Route path={swimming_adults} element={<Current_direction_page />} />
          <Route path={aqua_aerobics} element={<Current_direction_page />} />
          <Route path={aqua_mom} element={<Current_direction_page />} />
          <Route path={work_apparatus} element={<Current_direction_page />} />
          <Route path={box} element={<Current_direction_page />} />
          <Route path={grappling} element={<Current_direction_page />} />
          <Route path={kickboxing} element={<Current_direction_page />} />
          <Route path={mma} element={<Current_direction_page />} />
          <Route path={latina} element={<Current_direction_page />} />
          <Route path={multidance} element={<Current_direction_page />} />
          <Route path={oriental} element={<Current_direction_page />} />
          <Route path={zumba} element={<Current_direction_page />} />
          <Route path={dance_mix} element={<Current_direction_page />} />
          <Route path={children_center} element={<Kids_fitness_page />} />
          <Route path={baths_swimming} element={<Current_direction_page />} />
          <Route path={sports_pool} element={<Current_direction_page />} />
          <Route path={spa} element={<Current_direction_page />} />
          <Route path={thermal_baths} element={<Current_direction_page />} />
          <Route path={goldfish} element={<Current_direction_page />} />
          <Route path={person_team} element={<Person_team_page />} />
          <Route path={stock} element={<Stock_presentation_page />} />
          <Route path={news} element={<News_presentation_page />} />
          <Route path={stock_page} element={<Stock_page />} />
          <Route path={news_page} element={<News_page />} />
          <Route
            path={presentation_cards}
            element={<Cards_presentation_page />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/congratulations_registration"
            element={<Congratulations_registration />}
          />
          <Route element={<Wrapper />}>
            <Route
              path="/personal_account"
              element={<Personal_account_page />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
