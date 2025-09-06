export const chooseYourCardDeafultData: Omit<
  ClubCardsContentType,
  "heroDescription" | "pageDescription"
> = {
  imagesUrl: { webp: "", jpg: "" },
  head: "",
  description: "",
  path: "",
};

export const waterZoneDefaultData: WaterZoneContentType = {
  imagesUrl: { webp: "", jpg: "" },
  head: "",
  description: "",
  imagesDescription: "",
};

export const fitnessAreaDefaultData: Omit<
  FitnessAreaContentType,
  "path" | "nameKey"
> = {
  imagesUrl: { webp: "", jpg: "" },
  head: "",
  description: "",
  descriptionImages: "",
};

export const cardsPresentationDefaultData: Omit<
  ClubCardsContentType,
  "head" | "path" | "description"
> = {
  imagesUrl: { webp: "", jpg: "" },
  pageDescription: {
    all: "",
    daytime: "",
    business: "",
    weekend: "",
  },
  heroDescription: "",
};

export const childrensSwimmingDefaultData: ChildrensSwimmingContentType = {
  head: "",
  description: "",
  imageDescription: "",
  path: "",
  imagesUrl: { webp: "", jpg: "" },
};

export const directionsListDeafaultData: Pick<
  DirectionsContentType,
  "imagesUrl" | "direction" | "path" | "description"
> = {
  imagesUrl: { webp: "", jpg: "" },
  direction: "",
  path: "",
  description: "",
};

export const currentDirectionDeafaultData: DirectionsContentPageType = {
  hero: {
    description: "",
    imagesUrl: {
      jpg: "",
      webp: "",
    },
  },
  descriptionDirection: [
    {
      content: "",
      imagesUrl: {
        jpg: "",
        webp: "",
      },
    },
  ],
  directions: [],
};

export const stockPresentationDefaultData = {
  urlImages: { webp: "", jpg: "" },
  descriptionPromotion: "",
  descriptionPicture: "",
};

export const heroTeamDefault = {
  name: "",
  urlImages: {
    jpg: "",
    webp: "",
  },
  aboutCoach: {
    qualification: "",
    workExperience: "",
    contacts: {
      phone: "",
    },
    specialization: "",
    education: "",
    achievements: "",
  },
};

export const directionsPageDefault = {
  directions: [""],
  team: "",
  hero: {
    description: "",
    imagesUrl: {
      jpg: "",
      webp: "",
    },
  },
};

export const defaultConfigTabList = {
  TAB_LIST: [],
  TAB_LIST_KEYS: [],
};
