import { AreasStudy, TrainersDirection } from "components";

import { SaunasPoolsHero } from "./components";

const keysList = ["sportsPool", "spa", "thermalBaths", "goldfish"] as const;

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
