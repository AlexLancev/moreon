import { Areas_study } from "pages/services_page/components";

const keys_list = ["sports_pool", "spa", "thermal_baths", "goldfish"];

export const Saunas_pools_page = () => {
  return (
    <>
      <Areas_study keys_list={keys_list} />
    </>
  );
};
