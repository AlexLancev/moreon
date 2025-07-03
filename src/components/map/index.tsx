import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const KEY_MAP: string = import.meta.env.VITE_YANDEX_MAP_KEY;

type MapState = {
  center: [number, number];
  zoom: number;
};

type PlacemarkOptions = {
  iconLayout: string;
  iconImageHref: string;
  iconImageSize: [number, number];
  iconImageOffset?: [number, number];
};

export const Map_moreon = () => {
  if (!KEY_MAP) return null;

  const mapState: MapState = {
    center: [55.597246, 37.527184],
    zoom: 16,
  };

  const placemarkOptions: PlacemarkOptions = {
    iconLayout: "default#image",
    iconImageHref: "/images/dumbbell.svg",
    iconImageSize: [40, 40],
    iconImageOffset: [-40, -30],
  };

  return (
    <div className="bg-['url(/images/bg-map.png)'] bg-[center_center] bg-cover bg-no-repeat w-full max-w-[700px] h-[400px] rounded-3xl overflow-hidden">
      <YMaps
        query={{
          apikey: KEY_MAP,
          load: "package.full",
        }}
      >
        <Map
          defaultState={mapState}
          width="100%"
          height="400px"
          options={{ maxZoom: 16, minZoom: 16 }}
        >
          <Placemark geometry={mapState.center} options={placemarkOptions} />
        </Map>
      </YMaps>
    </div>
  );
};
