import { Link } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import xss from "xss";

import { Tabs, Container } from "@/components";

import { isEmptyObj } from "@/utils";
import { club_cards_store } from "@/stores/data_store";

const tab_list = [
  { key: "fitnes", category: "Фитнес" },
  { key: "fitnes_spa", category: "Фитнес + СПА" },
  { key: "corporate_card", category: "Корпоративная карта" },
  { key: "flexible", category: "Гибкая" },
  { key: "premium", category: "Премиум" },
];

export const Choose_your_card = observer(
  ({ tabs_store }: { tabs_store: Club_cards_tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;
    const { data, isLoading, isError } = club_cards_store;

    const club_cards_bd = toJS(data?.[0]?.data);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: Failed to fetch data</div>;

    if (
      !club_cards_store ||
      !club_cards_bd ||
      isEmptyObj(club_cards_bd) ||
      !tab_list ||
      tab_list.length === 0
    )
      return null;

    const current_data = club_cards_bd[isActiveTab] ?? {};

    if (!current_data) return null;

    const { head, description, images_url, path } = current_data;

    const sanitized_description = xss(description);

    return (
      <section className="py-12">
        <Container>
          <h2 className="mb-10">
            Выберите свою <span className="head_decor">карту</span>
          </h2>
          <Tabs
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />
          <div className="flex items-center gap-x-10 py-5">
            <picture>
              <source srcSet={images_url?.webp} type="image/webp" />
              <img
                width={590}
                height={269}
                src={images_url?.jpg}
                alt=""
                aria-hidden
              />
            </picture>
            <div className="w-full max-w-[525px]">
              <strong className="block mb-3 text-2xl text-white">{head}</strong>
              <div
                className="mb-5 text-lg ab"
                dangerouslySetInnerHTML={{ __html: sanitized_description }}
              ></div>
              <Link
                to={path}
                className="inline-flex text-white py-4 px-7 mt-10 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </Container>
      </section>
    );
  },
);
