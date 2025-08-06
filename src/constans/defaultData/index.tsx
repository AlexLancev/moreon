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
