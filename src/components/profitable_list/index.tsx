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
    <ul className="py-5">
      {profitable_data.map(
        ({ head, profitable_visits_list, images_url }, idx: number) => {
          if (!head || !profitable_visits_list || !images_url) return <li key={idx}></li>;
        },
      )}
    </ul>
  );
};
