import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Layout } from "@/components";
import {
  AboutPage,
  CardsPresentationPage,
  ClubCards,
  CongratulationsRegistration,
  CurrentDirectionPage,
  HomePage,
  KidsFitnessPage,
  Login,
  Logout,
  NewsPage,
  NewsPresentationPage,
  PersonTeamPage,
  PersonalAccountPage,
  PresentationDirectionsPage,
  Register,
  SaunasPoolsPage,
  ServicesPage,
  StockPage,
  StockPresentationPage,
  TeamPage,
  Wrapper,
} from "@/pages";
import { paths } from "@/paths";

const {
  home,
  aboutClub,
  services,
  team,
  clubCards,
  pools,
  kidsFitness,
  mindBody,
  strengthFunctionalTraining,
  aerobics,
  gym,
  pool,
  martialArts,
  dance,
  personalTraining,
  yoga,
  test,
  groupPrograms,
  absStreth,
  pranayamaMeditation,
  yogaIntensiv_90,
  pilatesAllegro,
  healthyBack,
  pilatesMat,
  softBalance,
  hathaYoga,
  crossTraining,
  hotIron_1,
  hotIron_2,
  lesMillsGrit,
  thinner,
  lesMillsCore,
  realRyder,
  step,
  stepPro,
  proJumping,
  stepInterval,
  infantSwimming,
  childrensSwimming,
  schoolCompetitiveSwimming,
  swimmingAdults,
  aquaAerobics,
  aquaMom,
  workApparatus,
  box,
  grappling,
  kickboxing,
  mma,
  latina,
  multidance,
  oriental,
  zumba,
  danceMix,
  childrenCenter,
  bathsSwimming,
  sportsPool,
  spa,
  thermalBaths,
  goldfish,
  personTeam,
  stock,
  news,
  presentationCards,
  stockPage,
  newsPage,
  login,
  logout,
  register,
  congratulationsRegistration,
  personalAccount,
} = paths;

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
      <Suspense fallback={<div>Загрузка страницы...</div>}>
        <Routes>
          <Route path={home} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={aboutClub} element={<AboutPage />} />
            <Route path={services} element={<ServicesPage />} />
            <Route path={team} element={<TeamPage />} />
            <Route path={clubCards} element={<ClubCards />} />
            <Route path={pools} element={<SaunasPoolsPage />} />
            <Route path={kidsFitness} element={<KidsFitnessPage />} />
            <Route path={mindBody} element={<PresentationDirectionsPage />} />
            <Route
              path={strengthFunctionalTraining}
              element={<PresentationDirectionsPage />}
            />
            <Route path={aerobics} element={<PresentationDirectionsPage />} />
            <Route path={gym} element={<CurrentDirectionPage />} />
            <Route path={pool} element={<PresentationDirectionsPage />} />
            <Route
              path={martialArts}
              element={<PresentationDirectionsPage />}
            />

            <Route path={dance} element={<PresentationDirectionsPage />} />
            <Route path={personalTraining} element={<CurrentDirectionPage />} />
            <Route path={yoga} element={<PresentationDirectionsPage />} />
            <Route path={test} element={<CurrentDirectionPage />} />
            <Route
              path={groupPrograms}
              element={<PresentationDirectionsPage />}
            />
            <Route path={absStreth} element={<CurrentDirectionPage />} />
            <Route
              path={pranayamaMeditation}
              element={<CurrentDirectionPage />}
            />
            <Route path={yogaIntensiv_90} element={<CurrentDirectionPage />} />
            <Route path={pilatesAllegro} element={<CurrentDirectionPage />} />
            <Route path={healthyBack} element={<CurrentDirectionPage />} />
            <Route path={pilatesMat} element={<CurrentDirectionPage />} />
            <Route path={softBalance} element={<CurrentDirectionPage />} />
            <Route path={hathaYoga} element={<CurrentDirectionPage />} />
            <Route path={crossTraining} element={<CurrentDirectionPage />} />
            <Route path={hotIron_1} element={<CurrentDirectionPage />} />
            <Route path={hotIron_2} element={<CurrentDirectionPage />} />
            <Route path={lesMillsGrit} element={<CurrentDirectionPage />} />
            <Route path={thinner} element={<CurrentDirectionPage />} />
            <Route path={lesMillsCore} element={<CurrentDirectionPage />} />
            <Route path={realRyder} element={<CurrentDirectionPage />} />
            <Route path={step} element={<CurrentDirectionPage />} />
            <Route path={stepPro} element={<CurrentDirectionPage />} />
            <Route path={proJumping} element={<CurrentDirectionPage />} />
            <Route path={stepInterval} element={<CurrentDirectionPage />} />
            <Route path={infantSwimming} element={<CurrentDirectionPage />} />
            <Route
              path={childrensSwimming}
              element={<CurrentDirectionPage />}
            />
            <Route
              path={schoolCompetitiveSwimming}
              element={<CurrentDirectionPage />}
            />
            <Route path={swimmingAdults} element={<CurrentDirectionPage />} />
            <Route path={aquaAerobics} element={<CurrentDirectionPage />} />
            <Route path={aquaMom} element={<CurrentDirectionPage />} />
            <Route path={workApparatus} element={<CurrentDirectionPage />} />
            <Route path={box} element={<CurrentDirectionPage />} />
            <Route path={grappling} element={<CurrentDirectionPage />} />
            <Route path={kickboxing} element={<CurrentDirectionPage />} />
            <Route path={mma} element={<CurrentDirectionPage />} />
            <Route path={latina} element={<CurrentDirectionPage />} />
            <Route path={multidance} element={<CurrentDirectionPage />} />
            <Route path={oriental} element={<CurrentDirectionPage />} />
            <Route path={zumba} element={<CurrentDirectionPage />} />
            <Route path={danceMix} element={<CurrentDirectionPage />} />
            <Route path={childrenCenter} element={<KidsFitnessPage />} />
            <Route path={bathsSwimming} element={<CurrentDirectionPage />} />
            <Route path={sportsPool} element={<CurrentDirectionPage />} />
            <Route path={spa} element={<CurrentDirectionPage />} />
            <Route path={thermalBaths} element={<CurrentDirectionPage />} />
            <Route path={goldfish} element={<CurrentDirectionPage />} />
            <Route path={personTeam} element={<PersonTeamPage />} />
            <Route path={stock} element={<StockPresentationPage />} />
            <Route path={news} element={<NewsPresentationPage />} />
            <Route path={stockPage} element={<StockPage />} />
            <Route path={newsPage} element={<NewsPage />} />
            <Route
              path={presentationCards}
              element={<CardsPresentationPage />}
            />

            <Route path={login} element={<Login />} />
            <Route path={logout} element={<Logout />} />
            <Route path={register} element={<Register />} />
            <Route
              path={congratulationsRegistration}
              element={<CongratulationsRegistration />}
            />
            <Route element={<Wrapper />}>
              <Route path={personalAccount} element={<PersonalAccountPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
