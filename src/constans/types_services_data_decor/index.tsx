import { CupSoda, Dumbbell, Medal, UsersRound } from "lucide-react";

import { ReactNode } from "react";

type Types_services_data_decor_type = Record<Types_services_key, ReactNode>;

export const types_services_data_decor: Types_services_data_decor_type = {
  spa: <CupSoda />,
  martial_arts: <Medal />,
  gym: <Dumbbell />,
  group_training: <UsersRound />,
};
