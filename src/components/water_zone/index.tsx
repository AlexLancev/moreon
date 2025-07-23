import { Container, Tabs, Title } from "components";
import { NotebookText as IconNotebookText } from "lucide-react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import { modal_store } from "@/stores";
import { water_zone_store } from "@/stores/data_store";
import { isEmptyObj } from "@/utils";

import { Button } from "../ui/button";

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

    const water_zone_bd = toJS(data?.[0]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка: не удалось получить данные</div>;

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
          <div className="relative px-4 py-8 after:absolute after:inset-0 after:-z-10 after:bg-water-zone-gradient-custom lg:px-8 lg:py-12 2xl:px-12 2xl:py-16">
            <picture>
              <source
                srcSet="/images/water_zone/result_zone_bg.webp"
                type="image/webp"
              />
              <img
                className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-3xl object-cover"
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
            <div className="gap-x-5 pt-2 md:flex md:items-center md:justify-between xl:*:w-1/2">
              <div className="mb-14 w-full">
                <Title className="mb-5 text-3xl">{head}</Title>
                <p className="mb-8 text-lg xl:text-xl 2xl:text-2xl">
                  {description}
                </p>
                <Button onClick={() => change_modal(!isVisibleModal)}>
                  Записаться на гостевой визит <IconNotebookText />
                </Button>
              </div>
              <picture>
                <source srcSet={images_url?.jpg} type="image/webp" />
                <img
                  className="m-auto h-[250px] overflow-hidden rounded-3xl object-cover md:h-[300px] xl:h-[350px]"
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
