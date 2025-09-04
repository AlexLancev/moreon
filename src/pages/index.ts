import { lazy } from "react";

export const HomePage = lazy(() => import("./homePage"));
export const AboutPage = lazy(() => import("./aboutPage"));
export const ServicesPage = lazy(() => import("./servicesPage"));
export const TeamPage = lazy(() => import("./teamPage"));
export const ClubCards = lazy(() => import("./clubCards"));
export const SaunasPoolsPage = lazy(() => import("./saunasPoolsPage"));
export const KidsFitnessPage = lazy(() => import("./kidsFitnessPage"));
export const PresentationDirectionsPage = lazy(
  () => import("./presentationDirectionsPage"),
);
export const CurrentDirectionPage = lazy(
  () => import("./currentDirectionPage"),
);
export const PersonTeamPage = lazy(() => import("./personTeamPage"));
export const StockPresentationPage = lazy(
  () => import("./stockPresentationPage"),
);
export const NewsPresentationPage = lazy(
  () => import("./newsPresentationPage"),
);
export const CardsPresentationPage = lazy(
  () => import("./cardsPresentationPage"),
);
export const StockPage = lazy(() => import("./stockPage"));
export const NewsPage = lazy(() => import("./newsPage"));
export const Register = lazy(() => import("./register"));
export const Login = lazy(() => import("./login"));
export const PersonalAccountPage = lazy(() => import("./personalAccountPage"));
export const CongratulationsRegistration = lazy(
  () => import("./congratulationsRegistration"),
);
export const Wrapper = lazy(() => import("./wrapper"));
export const Logout = lazy(() => import("./Logout"));
