import { every_card_data_type } from "components/every_card";

export const Every_card_list = ({ data }: { data: every_card_data_type[] }) => {
  if (!data || data.length === 0) return null;

  return (
    <ul className="grid grid-cols-4  gap-5 py-5">
      {data.map(({ head, images_url }, idx: number) => {
        if (!head || !images_url) return null;

        return (
          <li
            key={idx}
            className="grid gap-y-5 place-items-center p-10 rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.19)] duration-300 hover:bg-[rgba(255,255,255,0.12)]"
          >
            <picture>
              <source srcSet={images_url?.webp} type="image/webp" />
              <img src={images_url?.png} alt="" aria-hidden />
            </picture>
            <strong>{head}</strong>
          </li>
        );
      })}
    </ul>
  );
};
