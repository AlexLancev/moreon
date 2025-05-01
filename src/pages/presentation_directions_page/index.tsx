import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { directions_store, team_store } from "@/stores/data_store";
import { useLocation } from "react-router-dom";
import { filterDataByActiveTab } from "@/utils";

type current_direct = "mind-body";
type b = Record<
  current_direct,
  {
    directions: Direct_keys_type[];
    team: Team_tab_key_type;
  }
>;

const presentation_directions_data: b = {
  ["mind-body"]: {
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
};

export const Presentation_directions_page = observer(() => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1];

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
    team_data.length === 0
  )
    return null;

  const { directions, team } =
    presentation_directions_data[service as current_direct];

  if (!directions || !team) return null;

  return (
    <>
      <ul>
        {directions.map((direct) => (
          <li>{directions_bd[direct]?.direction}</li>
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
