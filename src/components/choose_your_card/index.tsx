import { Link } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import xss from "xss";

import { MessageCircleQuestion } from "lucide-react";

import { Button } from "../ui/button";

import { Tabs, Container, Title } from "@/components";

import { isEmptyObj, useGetResponsiveValue } from "@/utils";
import { club_cards_store } from "@/stores/data_store";
import { sizeTitleData } from "@/constans";

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
    const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);

    const club_cards_bd = toJS(data?.[0]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка: не удалось получить данные</div>;

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

    const sanitized_description = xss(description) ?? "";

    return (
      <section className="py-12">
        <Container>
          <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
            Выберите свою <span className="customHeadDecor">карту</span>
          </Title>
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
                loading="lazy"
                aria-hidden
              />
            </picture>
            <div className="w-full max-w-[525px]">
              <strong className="mb-3 block text-2xl text-white">{head}</strong>
              <div
                className="ab mb-5 text-lg"
                dangerouslySetInnerHTML={{ __html: sanitized_description }}
              ></div>
              <Button asChild>
                <Link to={`/presentation_cards/${path}`}>
                  Подробнее <MessageCircleQuestion />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  },
);
