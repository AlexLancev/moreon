import { observer } from "mobx-react-lite";
import xss from "xss";

import { ContentLoader, Tabs } from "@/components";
import { SkeletonFitnessCard } from "@/constans";
import { club_cards_store } from "@/stores/data_store";

const tab_list: Omit<Tab_list_type<Page_description_type_key>, "all">[] = [
  { key: "daytime", category: "Тариф 'Дневной'" },
  { key: "business", category: "Тариф 'Бизнес'" },
  { key: "weekend", category: "Тариф 'Выходного дня'" },
];

const cardsPresentationKeys = tab_list.map(({ key }) => key);

export const Render_card_description = observer(
  ({
    images_url,
    page_description,
    tabs_store: { isActiveTab, change_tabs },
  }: Render_card_description_props) => {
    if (!page_description) return null;

    return (
      <section className="py-12">
        {Object.keys(page_description)?.length > 1 && (
          <div className="py-10">
            <Tabs
              currentStore={{
                ...club_cards_store,
                data: cardsPresentationKeys,
              }}
              isActiveTab={isActiveTab}
              change_tabs={change_tabs}
              tab_list={tab_list}
            />
          </div>
        )}
        <ContentLoader
          currentStore={club_cards_store}
          skeletonComponent={SkeletonFitnessCard}
          initialVisibleCount={1}
        >
          <div className="md:flex md:gap-10">
            <picture className="flex-shrink-0">
              <source srcSet={images_url?.webp} type="image/webp" />
              <img
                src={images_url?.jpg}
                className="m-auto mb-5 w-72 lg:w-96 xl:w-[600px]"
                alt=""
                loading="lazy"
                aria-hidden
              />
            </picture>
            {page_description.all &&
              page_description.all.trim().length !== 0 && (
                <div
                  className="customInsertCardPageHTML mb-5 max-w-[750px] 2xl:text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: xss(
                      page_description.all ??
                        page_description[isActiveTab] ??
                        "",
                    ),
                  }}
                ></div>
              )}
          </div>
        </ContentLoader>
      </section>
    );
  },
);
