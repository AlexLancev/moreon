import { observer } from "mobx-react-lite";
import xss from "xss";

import { Tabs } from "@/components";

export type Render_card_tabs_type = {
  isActiveTab: Page_description_type_key;
  change_tabs: (value: string) => void;
};

type Render_card_description_props = {
  page_description: Record<Page_description_type_key, string>;
  images_url: {
    jpg: string;
    webp: string;
  };
  tabs_store: Render_card_tabs_type;
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
      <section className="py-12">
        {Object.keys(page_description).length > 1 && (
          <div className="py-10">
            <Tabs
              isActiveTab={isActiveTab}
              change_tabs={change_tabs}
              tab_list={tab_list}
            />
          </div>
        )}
        <div className="flex gap-10">
          <picture>
            <source srcSet={images_url?.webp} type="image/webp" />
            <img src={images_url?.jpg} alt="" aria-hidden />
          </picture>
          <div
            className="mb-5 card_page max-w-[750px]"
            dangerouslySetInnerHTML={{
              __html: xss(
                page_description.all ?? page_description[isActiveTab] ?? "",
              ),
            }}
          ></div>
        </div>
      </section>
    );
  },
);
