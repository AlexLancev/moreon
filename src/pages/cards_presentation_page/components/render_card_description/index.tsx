import { observer } from "mobx-react-lite";
import xss from "xss";

import { Tabs } from "@/components";

type Render_card_description_props = {
  page_description: Record<Page_description_type_key, string>;
  images_url: {
    jpg: string;
    webp: string;
  };
  tabs_store: {
    isActiveTab: Page_description_type_key;
    change_tabs: (value: string) => void;
  };
};

const tab_list = [
  { key: "daytime", category: "Тариф 'Дневной'" },
  { key: "business", category: "Тариф 'Бизнес'" },
  { key: "weekend", category: "Тариф 'Выходного дня'" },
];

export const Render_card_description = observer(
  ({
    images_url,
    page_description,
    tabs_store: { isActiveTab, change_tabs },
  }: Render_card_description_props) => {
    if (!page_description) return null;

    return (
      <>
        {Object.keys(page_description).length > 1 && (
          <Tabs
            isActiveTab={isActiveTab}
            change_tabs={change_tabs}
            tab_list={tab_list}
          />
        )}
        <section className="flex py-12">
          <div
            className="mb-5 ab"
            dangerouslySetInnerHTML={{
              __html: xss(
                page_description.all ?? page_description[isActiveTab] ?? "",
              ),
            }}
          ></div>
          <picture>
            <source srcSet={images_url?.webp} type="image/webp" />
            <img src={images_url?.jpg} alt="" aria-hidden />
          </picture>
        </section>
      </>
    );
  },
);
