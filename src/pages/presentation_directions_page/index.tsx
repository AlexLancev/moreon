import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { directions_store, team_store } from "@/stores/data_store";
import { filterDataByActiveTab } from "@/utils";

type Current_direct_key_type =
  | "mind_body"
  | "strength_functional_training"
  | "aerobics"
  | "gym"
  | "pool"
  | "martial_arts"
  | "dance"
  | "personal_training"
  | "yoga"
  | "test"
  | "group_training";
type Current_direct_type = Record<
  Current_direct_key_type,
  {
    directions: Direct_keys_type[] | null;
    team: Team_tab_key_type | null;
  }
>;

const presentation_directions_data: Current_direct_type = {
  mind_body: {
    directions: [
      "abs_streth",
      "pranayama_meditation",
      "yoga_intensiv_90",
      "pilates_allegro",
      "healthy_back",
      "pilates_mat",
      "soft_balance",
      "hatha_yoga",
    ],
    team: "group_training",
  },
  strength_functional_training: {
    directions: [
      "cross_training",
      "abs_streth",
      "les_mills_core",
      "hot_iron_1",
      "hot_iron_2",
      "les_mills_grit",
      "thinner",
    ],
    team: "group_training",
  },
  aerobics: {
    directions: [
      "real_ryder",
      "step",
      "step_pro",
      "pro_jumping",
      "step_interval",
    ],
    team: "group_training",
  },
  gym: {
    directions: null,
    team: "gym",
  },
  pool: {
    directions: [
      "infant_swimming",
      "childrens_swimming",
      "school_competitive_swimming",
      "swimming_adults",
      "aqua_aerobics",
      "aqua_mom",
    ],
    team: "pool",
  },
  martial_arts: {
    directions: ["work_apparatus", "box", "grappling", "kickboxing", "mma"],
    team: "martial_arts",
  },
  dance: {
    directions: ["latina", "multidance", "oriental", "zumba", "dance_mix"],
    team: "group_training",
  },
  personal_training: {
    directions: null,
    team: null,
  },
  yoga: {
    directions: ["pranayama_meditation", "yoga_intensiv_90", "hatha_yoga"],
    team: "group_training",
  },
  test: {
    directions: null,
    team: null,
  },
  group_training: {
    directions: [
      "mind_body",
      "strength_functional_training",
      "aerobics",
      "pool",
      "martial_arts",
      "dance",
      "yoga",
    ],
    team: "group_training",
  },
};

export const Presentation_directions_page = observer(() => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[
    pathSegments.length - 1
  ] as Current_direct_key_type;

  const {
    data: directions_data,
    isLoading: directions_isLoading,
    isError: directions_isError,
  } = directions_store;

  const {
    data: team_data,
    isLoading: team_isLoading,
    isError: team_isError,
  } = team_store;

  const directions_bd = toJS(directions_data?.[0]?.data);

  if (directions_isLoading || team_isLoading) return <div>Loading...</div>;
  if (directions_isError || team_isError)
    return <div>Error: Failed to fetch data</div>;

  if (
    !presentation_directions_data ||
    !directions_data ||
    !directions_bd ||
    !team_data ||
    !service ||
    team_data.length === 0
  )
    return null;

  const { directions, team } = presentation_directions_data[service];

  if (!directions || !team) return null;

  return (
    <>
      <ul>
        {directions.map((direct) => (
          <li>
            <Link to={`/services/${directions_bd[direct]?.path}`}>
              {directions_bd[direct]?.direction}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {filterDataByActiveTab(team_data, team)?.map(
          ({ name, url_images, about_coach: { qualification } }) => (
            <li>{name}</li>
          ),
        )}
      </ul>
    </>
  );
});
