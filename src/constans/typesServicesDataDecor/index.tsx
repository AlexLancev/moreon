import {
  CupSoda as IconCupSoda,
  Dumbbell as IconDumbbell,
  Medal as IconMedal,
  UsersRound as IconUsersRound,
} from "lucide-react";
import { ReactNode } from "react";

type TypesServicesDataDecorType = Record<TypesServicesKey, ReactNode>;

export const typesServicesDataDecor: TypesServicesDataDecorType = {
  spa: <IconCupSoda />,
  martialArts: <IconDumbbell />,
  gym: <IconMedal />,
  groupTraining: <IconUsersRound />,
};
