import { Team } from "pages/home_page/components";
import {
  Effective_training,
  Gallery,
  Personal_format,
  Stock,
} from "./components";

export const About_page = () => {
  return (
    <>
      <Gallery />
      <Effective_training />
      <Stock />
      <Personal_format />
      <Team />
    </>
  );
};
