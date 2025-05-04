import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { directions_store, team_store } from "@/stores/data_store";
import { modal_store } from "@/stores";
import { Areas_study, Team_list } from "@/components";

export const Presentation_directions_page = observer(() => {
  const { isVisibleModal, change_modal } = modal_store;
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1] as Direct_keys_type;

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

  const directions_bd = toJS(directions_data?.[0]);

  if (directions_isLoading || team_isLoading) return <div>Loading...</div>;
  if (directions_isError || team_isError)
    return <div>Error: Failed to fetch data</div>;

  if (
    !directions_data ||
    !directions_bd ||
    !team_data ||
    !service ||
    team_data.length === 0
  )
    return null;

  const {
    directions,
    team,
    hero: {
      description,
      images_url: { jpg, webp },
    },
  } = directions_bd[service];

  if (!directions || !team) return null;

  return (
    <>
      <div className="container">
        <section className="relative min-h-[400px] py-20 px-10 after:absolute after:inset-0 after:bg-black/80 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
          <picture>
            <source srcSet={webp} type="image/webp" />
            <img
              className="absolute inset-0 w-full h-full object-cover -z-10"
              src={jpg}
              alt=""
              aria-hidden
            />
          </picture>
          <div className="relative w-full max-w-[525px] z-10">
            <div
              className="ab"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <button
              onClick={() => change_modal(!isVisibleModal)}
              className="inline-flex text-white py-4 px-7 mt-10 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
              type="button"
            >
              Гостевой визит
            </button>
          </div>
        </section>
      </div>
      <Areas_study keys_list={directions} />
      <section className="py-10">
        <div className="container">
          <h2 className="mb-10">
            <span className="head_decor">Тренеры</span> направления
          </h2>
          <Team_list isActiveTab={team} />
        </div>
      </section>
    </>
  );
});
