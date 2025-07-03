import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import { Container, Tabs, Title } from "components";

import { NotebookText } from "lucide-react";

import { Button } from "../ui/button";

import { modal_store } from "@/stores";
import { isEmptyObj } from "@/utils";
import { water_zone_store } from "@/stores/data_store";

const tab_list = [
  { key: "baths_swimming", category: "Бани и бассейны" },
  { key: "sports_pool", category: "Спортивный бассейн" },
  { key: "spa", category: "СПА" },
  { key: "thermal_baths", category: "Термы" },
  { key: "goldfish", category: "Золотые рыбки" },
];

export const Water_zone = observer(
  ({ tabs_store }: { tabs_store: Water_zone_tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const { isVisibleModal, change_modal } = modal_store;

    const { data, isLoading, isError } = water_zone_store;

    const water_zone_bd = toJS(data?.[0]?.data);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: Failed to fetch data</div>;

    if (
      !water_zone_store ||
      !water_zone_bd ||
      isEmptyObj(water_zone_bd) ||
      !tab_list ||
      tab_list.length === 0
    )
      return null;

    const current_data = water_zone_bd[isActiveTab];

    const { head, description, images_url, images_description } =
      current_data ?? {};

    return (
      <section className="py-12">
        <Container>
          <div className="relative py-24 px-14 after:absolute after:inset-0 after:-z-10 after:bg-water-zone-gradient-custom">
            <picture>
              <source
                srcSet="/images/water_zone/result_zone_bg.webp"
                type="image/webp"
              />
              <img
                className="absolute inset-0 -z-10 w-full h-full object-cover rounded-3xl overflow-hidden"
                src="/images/water_zone/result_zone_bg.jpeg"
                alt=""
                loading="lazy"
                aria-hidden
              />
            </picture>
            <h2 className="visually-hidden">
              Откройте для себя мир релаксации и здоровья
            </h2>
            <Tabs
              isActiveTab={isActiveTab}
              change_tabs={change_tabs}
              tab_list={tab_list}
            />
            <div className="pt-10 flex items-center justify-between gap-x-5">
              <div className="w-full max-w-[625px]">
                <Title size="md" className="text-3xl mb-5">
                  {head}
                </Title>
                <p className="mb-8 text-lg">{description}</p>
                <Button onClick={() => change_modal(!isVisibleModal)}>
                  Записаться на гостевой визит <NotebookText />
                </Button>
              </div>
              <picture>
                <source srcSet={images_url?.jpg} type="image/webp" />
                <img
                  className="h-[350px] object-cover rounded-3xl overflow-hidden"
                  width={525}
                  src={images_url?.jpg}
                  alt={images_description}
                  aria-label={images_description}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </Container>
      </section>
    );
  },
);
