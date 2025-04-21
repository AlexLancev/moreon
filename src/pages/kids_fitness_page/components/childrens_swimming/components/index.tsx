import { Tabs } from "components";
import { observer } from "mobx-react-lite";
import { tabs_store_type } from "pages/about_page/components/personal_format";
import { Link } from "react-router-dom";

const childrens_swimming_tabs_data = {
  infant_swimming: {
    head: "Грудничковое плавание",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quos.",
    image_description: "",
    patch: "/",
    images_url: {
      jpg: "/images/childrens_swimming_tabs/direction_1.jpeg",
      webp: "/images/childrens_swimming_tabs/direction_1.webp",
    },
  },
  early_swimming: {
    head: "Ранее плавание",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quos.",
    image_description: "",
    patch: "/",
    images_url: {
      jpg: "/images/childrens_swimming_tabs/direction_2.jpeg",
      webp: "/images/childrens_swimming_tabs/direction_2.webp",
    },
  },
  childrens_swimming: {
    head: "Детское плавание",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quos.",
    image_description: "",
    patch: "/",
    images_url: {
      jpg: "/images/childrens_swimming_tabs/direction_3.jpeg",
      webp: "/images/childrens_swimming_tabs/direction_3.webp",
    },
  },
  competitive_swimming: {
    head: "Спортивное плавание",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quos.",
    image_description: "",
    patch: "/",
    images_url: {
      jpg: "/images/childrens_swimming_tabs/direction_4.jpeg",
      webp: "/images/childrens_swimming_tabs/direction_4.webp",
    },
  },
};

type childrens_swimming_tab_list_type =
  | "infant_swimming"
  | "early_swimming"
  | "childrens_swimming"
  | "competitive_swimming";

const childrens_swimming_tab_list = [
  { key: "infant_swimming", category: "Грудничковое плавание" },
  { key: "early_swimming", category: "Ранее плавание" },
  { key: "childrens_swimming", category: "Детское плавание" },
  { key: "competitive_swimming", category: "Спортивное плавание" },
];

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

export const Childrens_swimming_tabs = observer(
  ({ tabs_store }: tabs_store_type) => {
    const { isActiveTab, change_tabs } = tabs_store;

    if (
      !childrens_swimming_tab_list ||
      childrens_swimming_tab_list.length === 0 ||
      !childrens_swimming_tabs_data ||
      isEmptyObj(childrens_swimming_tabs_data)
    )
      return null;

    const { head, description, image_description, patch, images_url } =
      childrens_swimming_tabs_data[
        isActiveTab as childrens_swimming_tab_list_type
      ] ?? {};

    return (
      <div className="py-4">
        <Tabs
          isActiveTab={isActiveTab}
          change_tabs={change_tabs}
          tab_list={childrens_swimming_tab_list}
        />
        <div className="flex items-center justify-between gap-x-12 py-3">
          <div className="w-full max-w-[725px]">
            <strong className="block mb-5">{head}</strong>
            <p className="mb-5">{description}</p>
            <Link
              to={patch}
              className="inline-flex will-change-transform text-white py-4 px-7 mt-10 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
            >
              Подробнее
            </Link>
          </div>
          <picture>
            <source srcSet={images_url?.webp} type="image/webp" />
            <img
              width={525}
              height={350}
              className="object-cover rounded-3xl overflow-hidden"
              src={images_url?.jpg}
              alt={image_description}
              aria-label={image_description}
            />
          </picture>
        </div>
      </div>
    );
  },
);
