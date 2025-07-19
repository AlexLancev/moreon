import {
  CupSoda as IconCupSoda,
  Dumbbell as IconDumbbell,
  Medal as IconMedal,
  UsersRound as IconUsersRound,
} from "lucide-react";

import { ReactNode } from "react";

type Types_services_data_decor_type = Record<Types_services_key, ReactNode>;

export const types_services_data_decor: Types_services_data_decor_type = {
  spa: <IconCupSoda />,
  martial_arts: <IconDumbbell />,
  gym: <IconMedal />,
  group_training: <IconUsersRound />,
};
