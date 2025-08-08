export const chooseYourCardDeafultData: Omit<
  Club_cards_content_type,
  "hero_description" | "page_description"
> = {
  images_url: { webp: "", jpg: "" },
  head: "",
  description: "",
  path: "",
};

export const waterZoneDefaultData: Water_zone_content_type = {
  images_url: { webp: "", jpg: "" },
  head: "",
  description: "",
  images_description: "",
};

export const fitnessAreaDefaultData: Omit<
  FitnessAreaContentType,
  "path" | "name_key"
> = {
  images_url: { webp: "", jpg: "" },
  head: "",
  description: "",
  description_images: "",
};

export const cardsPresentationDefaultData: Omit<
  Club_cards_content_type,
  "head" | "path" | "description"
> = {
  images_url: { webp: "", jpg: "" },
  page_description: {
    all: "",
    daytime: "",
    business: "",
    weekend: "",
  },
  hero_description: "",
};

export const childrensSwimmingDefaultData: Childrens_swimming_content_type = {
  head: "",
  description: "",
  image_description: "",
  path: "",
  images_url: { webp: "", jpg: "" },
};

export const directionsListDeafaultData: Pick<
  Directions_content_type,
  "images_url" | "direction" | "path" | "description"
> = {
  images_url: { webp: "", jpg: "" },
  direction: "",
  path: "",
  description: "",
};

export const currentDirectionDeafaultData: Directions_content_page_type = {
  hero: {
    description: "",
    images_url: {
      jpg: "",
      webp: "",
    },
  },
  description_direction: [
    {
      content: "",
      images_url: {
        jpg: "",
        webp: "",
      },
    },
  ],
  directions: [],
};
