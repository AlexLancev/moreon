import { AreasStudy, TrainersDirection } from "components";

import { SaunasPoolsHero } from "./components";

const keysList: DirectKeysType[] = [
  "sportsPool",
  "spa",
  "thermalBaths",
  "goldfish",
];

const SaunasPoolsPage = () => {
  return (
    <>
      <SaunasPoolsHero />
      <AreasStudy keysList={keysList} />
      <TrainersDirection direction={"pool"} />
    </>
  );
};

export default SaunasPoolsPage;
