import { useState } from "react";
import { observer } from "mobx-react-lite";

import { gallery_list_store } from "@/stores/data_store";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";

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
        <Button onClick={handleVisibleShow} className="flex m-auto mt-5">
          Показать ещё <Eye />
        </Button>
      )}
    </>
  );
});
