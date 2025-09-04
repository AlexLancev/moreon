import { OtherDirections } from "@/components";

import {
  ChildrensCenter,
  ChildrensSwimming,
  KidsFitnesHero,
  MartialArtsChildren,
} from "./components";

const KidsFitnessPage = () => {
  return (
    <>
      <KidsFitnesHero />
      <ChildrensSwimming />
      <MartialArtsChildren />
      <ChildrensCenter />
      <OtherDirections />
    </>
  );
};

export default KidsFitnessPage;
