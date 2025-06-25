import { lazy } from "react";

export const Home_page = lazy(() => import("./home_page"));
export const About_page = lazy(() => import("./about_page"));
export const Services_page = lazy(() => import("./services_page"));
export const Team_page = lazy(() => import("./team_page"));
export const Club_cards = lazy(() => import("./club_cards"));
export const Saunas_pools_page = lazy(() => import("./saunas_pools_page"));
export const Kids_fitness_page = lazy(() => import("./kids_fitness_page"));
export const Presentation_directions_page = lazy(
  () => import("./presentation_directions_page"),
);
export const Current_direction_page = lazy(
  () => import("./current direction_page"),
);
export const Person_team_page = lazy(() => import("./person_team_page"));
export const Stock_presentation_page = lazy(
  () => import("./stock_presentation_page"),
);
export const News_presentation_page = lazy(
  () => import("./news_presentation_page"),
);
export const Cards_presentation_page = lazy(
  () => import("./cards_presentation_page"),
);
export const Stock_page = lazy(() => import("./stock_page"));
export const News_page = lazy(() => import("./news_page"));
export const Register = lazy(() => import("./register"));
export const Login = lazy(() => import("./login"));
export const Personal_account_page = lazy(
  () => import("./personal_account_page"),
);
export const Congratulations_registration = lazy(
  () => import("./congratulations_registration"),
);
export const Wrapper = lazy(() => import("./wrapper"));
export const Logout = lazy(() => import("./Logout"));
