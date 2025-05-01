import { useState } from "react";
import { observer } from "mobx-react-lite";

import { gallery_list_store } from "@/stores/data_store";

const num = 6;

export const Gallery_list = observer(() => {
  const [visibleShow, setVisibleShow] = useState<number>(num);
  const { data, isLoading, isError } = gallery_list_store;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: Failed to fetch data</div>;

  if (!gallery_list_store || !data || data.length === 0) {
    return <div>No data available</div>;
  }

  const handleVisibleShow = () => {
    if (data.length > visibleShow) {
      setVisibleShow((prev) => prev + num);
    }
  };

  return (
    <>
      <ul className="grid grid-cols-3 place-items-center gap-4">
        {data
          .slice(0, visibleShow)
          .map(({ description, images_url: { jpg, webp } }, idx: number) => (
            <li key={idx} className="h-full rounded-3xl overflow-hidden">
              <button type="button" className="block h-full">
                <span className="visually-hidden">{description}</span>
                <picture>
                  <source srcSet={jpg} type="image/webp" />
                  <img
                    className="h-full object-cover duration-700 hover:scale-[1.1]"
                    src={jpg}
                    alt={description}
                  />
                </picture>
              </button>
            </li>
          ))}
      </ul>
      {data.length > visibleShow && (
        <button
          onClick={handleVisibleShow}
          type="button"
          className="flex will-change-transform text-white py-4 px-7 mt-10 m-auto 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
        >
          Показать ещё
        </button>
      )}
    </>
  );
});
