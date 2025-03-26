import {
  About_us,
  Club_news,
  Dream_body,
  Home_hero,
  Our_application,
  Stock,
  Team,
  Video_reviews,
} from "./components";

export const Home_page = () => {
  return (
    <>
      <Home_hero />
      <Dream_body />
      <Stock />
      <Club_news />
      <About_us />
      <Video_reviews />
      <Team />
      <Our_application />
    </>
  );
};
