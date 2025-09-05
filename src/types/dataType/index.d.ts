interface TypesServicesType {
  id: number;
  head: string;
  description: string;
  path: TypesServicesKey;
}

type TypesServicesKey = "spa" | "martialArts" | "gym" | "groupTraining";

interface AboutUsType {
  id: number;
  title: string;
  description: string;
}

interface EveryCardType {
  id: number;
  head: string;
  imagesUrl: {
    png: string;
    webp: string;
  };
}

interface GalleryListType {
  id: number;
  description: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
}

type PerformanceKeyType =
  | "spa"
  | "cafeRestaurant"
  | "reception"
  | "salesDepartment";

interface PerformanceType {
  dataKey: readonly PerformanceKeyType[];
  isVisibleBtn: boolean;
}

interface PerformanceImagesType {
  imagesDescription: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
}

type PerformanceDataType = Record<
  PerformanceKeyType,
  {
    title: string;
    description: string;
    decorTitle: string;
    arrImages: PerformanceImagesType[];
  }
>;

interface VideoReviewsType {
  id: number;
  description: string;
  personAboutClub: string;
  previewImage: {
    jpg: string;
    webp: string;
  };
  path: string;
}

interface AboutQuestionType {
  id: number;
  head: string;
  description: string;
}

type PersonalFormatKeyType =
  | "gym"
  | "groupTraining"
  | "childrensPrograms"
  | "beautyHealth"
  | "authorsPrograms";

interface TabsStoreType<K> {
  isActiveTab: K;
  changeTabs: (value: K) => void;
}

interface PersonalFormatTabsType<K> {
  dataKey: readonly PersonalFormatKeyType[];
  tabsStore: TabsStoreType<K>;
  className?: string;
}

type TabListType<K extends string> = Readonly<{
  key: K;
  category: string;
}>;

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

interface FitnessAreaTabsType {
  isActiveTab: TabFitnessType;
  changeTabs: (value: string) => void;
}

type TabFitnessType =
  | "trainingRoom"
  | "gym"
  | "pool"
  | "cardioRoom"
  | "martialArts";

interface FitnessAreaContentType {
  nameKey: TabFitnessType;
  head: string;
  description: string;
  descriptionImages: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
  path: string;
}

type FitnessAreaType = Record<TabFitnessType, FitnessAreaContentType>;

type WaterZoneKeyType =
  | "bathsSwimming"
  | "sportsPool"
  | "spa"
  | "thermalBaths"
  | "goldfish";

interface WaterZoneTabsType {
  isActiveTab: WaterZoneKeyType;
  changeTabs: (value: string) => void;
}

interface WaterZoneContentType {
  head: string;
  description: string;
  imagesDescription: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
}

type WaterZoneType = Record<WaterZoneKeyType, WaterZoneContentType>;

interface ClubCardsTabsType {
  isActiveTab: ClubCardsKeyType;
  changeTabs: (value: string) => void;
}

type ClubCardsKeyType =
  | "fitnes"
  | "fitnesSpa"
  | "corporateCard"
  | "flexible"
  | "premium";

type PageDescriptionTypeKey = "all" | "daytime" | "business" | "weekend";

interface RenderCardTabsType {
  isActiveTab: PageDescriptionTypeKey;
  changeTabs: (value: string) => void;
}

interface RenderCardDescriptionProps {
  pageDescription: Record<PageDescriptionTypeKey, string>;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
  tabsStore: RenderCardTabsType;
}

interface ClubCardsContentType {
  head: string;
  description: string;
  heroDescription: string;
  pageDescription: Record<PageDescriptionTypeKey, string>;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
  path: string;
}

type ClubCardsType = Record<ClubCardsKeyType, ClubCardsContentType>;

interface ChildrensSwimmingTabsType {
  isActiveTab: ChildrensSwimmingKeyType;
  changeTabs: (value: string) => void;
}

type ChildrensSwimmingKeyType =
  | "infantSwimming"
  | "childrensSwimming"
  | "schoolCompetitiveSwimming";

interface ChildrensSwimmingContentType {
  head: string;
  description: string;
  imageDescription: string;
  path: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
}

type ChildrensSwimmingType = Record<
  ChildrensSwimmingKeyType,
  ChildrensSwimmingContentType
>;

interface HeroDataType {
  id: number;
  description?: string;
  descriptionPicture: string;
  descriptionPromotion: string;
  urlImages: {
    jpg: string;
    webp: string;
  };
}

interface NewsType {
  id: number;
  description: string;
  descriptionPicture: string;
  descriptionPromotion: string;
  urlImages: {
    jpg: string;
    webp: string;
  };
}

interface StockType {
  id: number;
  descriptionPicture: string;
  descriptionPromotion: string;
  urlImages: {
    jpg: string;
    webp: string;
  };
}

interface HeroType {
  data: HeroDataType[];
  isLoading: boolean;
  isError: null | boolean;
}

type TeamTabKeyType = "martialArts" | "gym" | "groupTraining" | "pool";

interface TeamKeyType {
  isActiveTab: TeamTabKeyType;
  changeTabs?: (value: string) => void;
}

interface TeamType {
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
}

interface ReviewsType {
  id: number;
  person: string;
  review: string;
  raiting: string;
}

interface ProfitableVisitsType {
  id: number;
  head: string;
  profitableVisitsList: string[];
  imagesUrl: {
    png: string;
    webp: string;
  };
}

interface OtherDirectionsType {
  id: number;
  path: string;
  descriptions: string;
  imagesUrl: {
    png: string;
    webp: string;
  };
}

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

interface DescriptionDirectionType {
  content: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
}

interface DirectionsContentPageType {
  hero: {
    description: string;
    imagesUrl: {
      jpg: string;
      webp: string;
    };
  };
  descriptionDirection: DescriptionDirectionType[];
  directions: DirectKeysType[];
}

interface DirectionsContentType extends DirectionsContentPageType {
  team: TeamTabKeyType;
  direction: string;
  description: string;
  imagesUrl: {
    jpg: string;
    webp: string;
  };
  path: string;
}

type DirectionsType = Record<DirectKeysType, DirectionsContentType>;

interface DirectionsKeysType {
  keysList: readonly DirectKeysType[];
  visibleElements?: number;
}

interface DataActionType {
  id: number;
  label: string;
  urlXxxlImgWebp: string;
  urlXxxlImgJpg: string;
  urlXxlImgWebp: string;
  urlXxlImgJpg: string;
  urlXlImgWebp: string;
  urlXlImgJpg: string;
}

interface CurrentStoreType<T> {
  data: readonly T[] | null;
  isLoading: boolean;
  isError: null | boolean;
}

interface TabsType<T, K> {
  isActiveTab: K;
  changeTabs: (value: K) => void;
  tabList: readonly TabListType<K>[];
  currentChangeTab?: string;
  className?: string;
  currentStore: CurrentStoreType<T>;
}
