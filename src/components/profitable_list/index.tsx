import classNames from "classnames";

type profitable_data_type = {
  head: string;
  profitable_visits_list: string[];
  images_url: {
    png: string;
    webp: string;
  };
};

export const Profitable_list = ({
  profitable_data,
}: {
  profitable_data: profitable_data_type[];
}) => {
  if (!profitable_data || profitable_data.length === 0) return null;

  return (
    <ul className="grid grid-cols-4 gap-6 py-5">
      {profitable_data.map(
        ({ head, profitable_visits_list, images_url }, idx: number) => {
          if (!head || !profitable_visits_list || !images_url) return null;

          return (
            <li
              key={idx}
              className="group flex flex-col py-5 px-10 bg-[url('/images/profitable_visits/profit_decor.svg')] bg-[100%_auto] bg-no-repeat bg-left-bottom rounded-3xl overflow-hidden"
            >
              <picture>
                <source srcSet={images_url?.webp} type="image/webp" />
                <img
                  className="block m-auto mb-5 opacity-70 group-hover:opacity-100 duration-300"
                  src={images_url?.png}
                  alt=""
                  aria-hidden
                />
              </picture>
              <strong className="flex-1 text-center text-2xl mb-3">
                {head}
              </strong>
              <ul className="list-disc pb-2">
                {profitable_visits_list.map((profit, idx: number) => (
                  <li key={idx} className="[&:not(:last-child)]:mb-2">
                    {profit}
                  </li>
                ))}
              </ul>
            </li>
          );
        },
      )}
    </ul>
  );
};
