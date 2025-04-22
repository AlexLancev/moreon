import { Tabs } from "components/tabs";
import { observer } from "mobx-react-lite";
import { Tabs_type } from "pages/about_page/components/fitness_area";
import { Link } from "react-router-dom";

const choose_your_result_card_data = {
  fitnes: {
    head: "Фитнес",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_1.jpeg",
      webp: "/images/choose_your_card/result_card_1.webp",
    },
    path: "/",
  },
  fitnes_spa: {
    head: "Фитнес + СПА",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_2.jpeg",
      webp: "/images/choose_your_card/result_card_2.webp",
    },
    path: "/",
  },
  corporate_card: {
    head: "Корпоративная карта",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_3.jpeg",
      webp: "/images/choose_your_card/result_card_3.webp",
    },
    path: "/",
  },
  flexible: {
    head: "Гибкая",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_4.jpeg",
      webp: "/images/choose_your_card/result_card_4.webp",
    },
    path: "/",
  },
  premium: {
    head: "Премиум",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique, laboriosam repudiandae impedit modi obcaecati magni ullam quisquam iusto aut!",
    images_url: {
      jpg: "/images/choose_your_card/result_card_5.jpeg",
      webp: "/images/choose_your_card/result_card_5.webp",
    },
    path: "/",
  },
};

type key_list_type = keyof typeof choose_your_result_card_data;

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

const tab_list = [
  { key: "fitnes", category: "Фитнес" },
  { key: "fitnes_spa", category: "Фитнес + СПА" },
  { key: "corporate_card", category: "Корпоративная карта" },
  { key: "flexible", category: "Гибкая" },
  { key: "premium", category: "Премиум" },
];

export const Choose_your_card = observer(
  ({ tabs_store }: { tabs_store: Tabs_type }) => {
    const { isActiveTab, change_tabs } = tabs_store;
    if (
      !choose_your_result_card_data ||
      isEmptyObj(choose_your_result_card_data)
    )
      return null;

    const { head, description, images_url, path } =
      choose_your_result_card_data[isActiveTab as key_list_type] ?? {};

    return (
      <section className="py-12">
        <div className="container">
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
              <p className="mb-5 text-lg">{description}</p>
              <Link
                to={path}
                className="inline-flex text-white py-4 px-7 mt-10 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  },
);
