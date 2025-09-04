type TypesServicesType = {
  id: number;
  head: string;
  description: string;
  path: TypesServicesKey;
};

type TypesServicesKey = "spa" | "martialArts" | "gym" | "groupTraining";

type AboutUsType = {
  id: number;
  title: string;
  description: string;
};

type EveryCardType = {
  id: number;
  head: string;
  imagesUrl: {
    png: string;
    webp: string;
  };
};

type GalleryListType = {
  id: number;
  description: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
};

type PerformanceKeyType =
  | "spa"
  | "cafeRestaurant"
  | "reception"
  | "salesDepartment";

type PerformanceType = {
  dataKey: PerformanceKeyType[];
  isVisibleBtn: boolean;
};

type PerformanceImagesType = {
  imagesDescription: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
};

type PerformanceDataType = Record<
  PerformanceKeyType,
  {
    title: string;
    description: string;
    decorTitle: string;
    arrImages: PerformanceImagesType[];
  }
>;

type VideoReviewsType = {
  id: number;
  description: string;
  personAboutClub: string;
  previewImage: {
    jpg: string;
    webp: string;
  };
  path: string;
};

type AboutQuestionType = {
  id: number;
  head: string;
  description: string;
};

type PersonalFormatKeyType =
  | "gym"
  | "groupTraining"
  | "childrensPrograms"
  | "beautyHealth"
  | "authorsPrograms";

type TabsStoreType<K> = {
  isActiveTab: K;
  changeTabs: (value: K) => void;
};

type PersonalFormatTabsType<K> = {
  dataKey: PersonalFormatKeyType[];
  tabsStore: TabsStoreType<K>;
  className?: string;
};

type TabListType<K> = {
  key: K;
  category: string;
};

type KeyListType = {
  [key: string]: { description: string };
};

type PersonalFormatDataType = Record<
  PersonalFormatKeyType,
  {
    keyName: PersonalFormatKeyType;
    category: string;
    tabList: TabListType<PersonalFormatKeyType>[];
    keyList: KeyListType;
  }
>;

type FitnessAreaTabsType = {
  isActiveTab: TabFitnessType;
  changeTabs: (value: string) => void;
};

type TabFitnessType =
  | "trainingRoom"
  | "gym"
  | "pool"
  | "cardioRoom"
  | "martialArts";

type FitnessAreaContentType = {
  nameKey: TabFitnessType;
  head: string;
  description: string;
  descriptionImages: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
  path: string;
};

type FitnessAreaType = Record<TabFitnessType, FitnessAreaContentType>;

type WaterZoneKeyType =
  | "bathsSwimming"
  | "sportsPool"
  | "spa"
  | "thermalBaths"
  | "goldfish";

type WaterZoneTabsType = {
  isActiveTab: WaterZoneKeyType;
  changeTabs: (value: string) => void;
};

type WaterZoneContentType = {
  head: string;
  description: string;
  imagesDescription: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
};

type WaterZoneType = Record<WaterZoneKeyType, WaterZoneContentType>;

type ClubCardsTabsType = {
  isActiveTab: ClubCardsKeyType;
  changeTabs: (value: string) => void;
};

type ClubCardsKeyType =
  | "fitnes"
  | "fitnesSpa"
  | "corporateCard"
  | "flexible"
  | "premium";

type PageDescriptionTypeKey = "all" | "daytime" | "business" | "weekend";

type RenderCardTabsType = {
  isActiveTab: PageDescriptionTypeKey;
  changeTabs: (value: string) => void;
};

type RenderCardDescriptionProps = {
  pageDescription: Record<PageDescriptionTypeKey, string>;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
  tabsStore: RenderCardTabsType;
};

type ClubCardsContentType = {
  head: string;
  description: string;
  heroDescription: string;
  pageDescription: Record<PageDescriptionTypeKey, string>;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
  path: string;
};

type ClubCardsType = Record<ClubCardsKeyType, ClubCardsContentType>;

type ChildrensSwimmingTabsType = {
  isActiveTab: ChildrensSwimmingKeyType;
  changeTabs: (value: string) => void;
};

type ChildrensSwimmingKeyType =
  | "infantSwimming"
  | "childrensSwimming"
  | "schoolCompetitiveSwimming";

type ChildrensSwimmingContentType = {
  head: string;
  description: string;
  imageDescription: string;
  path: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
};

type ChildrensSwimmingType = Record<
  ChildrensSwimmingKeyType,
  ChildrensSwimmingContentType
>;

type HeroDataType = {
  id: number;
  description?: string;
  descriptionPicture: string;
  descriptionPromotion: string;
  urlImages: {
    jpg: string;
    webp: string;
  };
};

type NewsType = {
  id: number;
  description: string;
  descriptionPicture: string;
  descriptionPromotion: string;
  urlImages: {
    jpg: string;
    webp: string;
  };
};

type StockType = {
  id: number;
  descriptionPicture: string;
  descriptionPromotion: string;
  urlImages: {
    jpg: string;
    webp: string;
  };
};

type HeroType = {
  data: HeroDataType[];
  isLoading: boolean;
  isError: null | boolean;
};

type TeamTabKeyType = "martialArts" | "gym" | "groupTraining" | "pool";

type TeamKeyType = {
  isActiveTab: TeamTabKeyType;
  changeTabs?: (value: string) => void;
};

type TeamType = {
  name: string;
  type: Partial<Record<string, boolean>>;
  urlImages: {
    jpg: string;
    webp: string;
  };
  aboutCoach: {
    qualification: string;
    workExperience: string;
    contacts: {
      phone: string;
    };
    specialization: string;
    education: string;
    achievements: string;
  };
};

type ReviewsType = {
  id: number;
  person: string;
  review: string;
  raiting: string;
};

type ProfitableVisitsType = {
  id: number;
  head: string;
  profitableVisitsList: string[];
  imagesUrl: {
    png: string;
    webp: string;
  };
};

type OtherDirectionsType = {
  id: number;
  path: string;
  descriptions: string;
  imagesUrl: {
    png: string;
    webp: string;
  };
};

type DirectKeysType =
  | "mindBody"
  | "strengthFunctionalTraining"
  | "aerobics"
  | "gym"
  | "pool"
  | "martialArts"
  | "dance"
  | "personalTraining"
  | "yoga"
  | "test"
  | "kidsFitnes"
  | "groupTraining"
  | "stretching"
  | "pranayamaMeditation"
  | "yogaIntensiv_90"
  | "pilatesAllegro"
  | "healthyBack"
  | "pilatesMat"
  | "softBalance"
  | "hathaYoga"
  | "crossTraining"
  | "absStreth"
  | "lesMillsBodyPump"
  | "hotIron_1"
  | "hotIron_2"
  | "lesMillsGrit"
  | "thinner"
  | "lesMillsCore"
  | "realRyder"
  | "step"
  | "stepPro"
  | "proJumping"
  | "stepInterval"
  | "infantSwimming"
  | "swimmingChildren"
  | "schoolCompetitiveSwimming"
  | "swimmingAdults"
  | "aquaAerobics"
  | "aquaMom"
  | "workApparatus"
  | "box"
  | "grappling"
  | "kickboxing"
  | "mma"
  | "latina"
  | "multidance"
  | "oriental"
  | "zumba"
  | "danceMix"
  | "childrensSwimming"
  | "martialArtsChildren"
  | "childrenCenter"
  | "bathsSwimming"
  | "sportsPool"
  | "spa"
  | "thermalBaths"
  | "goldfish";

type DescriptionDirectionType = {
  content: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
};

type DirectionsContentPageType = {
  hero: {
    description: string;
    imagesUrl: {
      jpg: string;
      webp: string;
    };
  };
  descriptionDirection: DescriptionDirectionType[];
  directions: DirectKeysType[];
};

type DirectionsContentType = DirectionsContentPageType & {
  team: TeamTabKeyType;
  direction: string;
  description: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
  path: string;
};

type DirectionsType = Record<DirectKeysType, DirectionsContentType>;

type DirectionsKeysType = {
  keysList: DirectKeysType[];
  visibleElements?: number;
};

type DataActionType = {
  id: number;
  label: string;
  urlXxxlImgWebp: string;
  urlXxxlImgJpg: string;
  urlXxlImgWebp: string;
  urlXxlImgJpg: string;
  urlXlImgWebp: string;
  urlXlImgJpg: string;
};

type CurrentStoreType<T> = {
  data: T[] | null;
  isLoading: boolean;
  isError: null | boolean;
};

type TabsType<T, K> = {
  isActiveTab: K;
  changeTabs: (value: K) => void;
  tabList: TabListType<K>[];
  currentChangeTab?: string;
  className?: string;
  currentStore: CurrentStoreType<T>;
};
