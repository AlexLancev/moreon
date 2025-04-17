import { Every_card_list } from "components";

export type every_card_data_type = {
  head: string;
  images_url: {
    png: string;
    webp: string;
  };
};

const every_card_data: every_card_data_type[] = [
  {
    head: "Тренажерный зал",
    images_url: {
      png: "/images/every_card/card-item-1.png",
      webp: "/images/every_card/card-item-1.webp",
    },
  },
  {
    head: "Групповые программы",
    images_url: {
      png: "/images/every_card/card-item-2.png",
      webp: "/images/every_card/card-item-2.webp",
    },
  },
  {
    head: "Бассейн",
    images_url: {
      png: "/images/every_card/card-item-3.png",
      webp: "/images/every_card/card-item-3.webp",
    },
  },
  {
    head: "Вводные тренировки",
    images_url: {
      png: "/images/every_card/card-item-4.png",
      webp: "/images/every_card/card-item-4.webp",
    },
  },
  {
    head: "Единоборства",
    images_url: {
      png: "/images/every_card/card-item-5.png",
      webp: "/images/every_card/card-item-5.webp",
    },
  },
  {
    head: "Бесплатная парковка",
    images_url: {
      png: "/images/every_card/card-item-6.png",
      webp: "/images/every_card/card-item-6.webp",
    },
  },
  {
    head: "Клубная жизнь",
    images_url: {
      png: "/images/every_card/card-item-7.png",
      webp: "/images/every_card/card-item-7.webp",
    },
  },
  {
    head: "Фитнес диагностика",
    images_url: {
      png: "/images/every_card/card-item-8.png",
      webp: "/images/every_card/card-item-8.webp",
    },
  },
];

export const Every_card = () => {
  if (!every_card_data || every_card_data.length === 0) return null;

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          В каждой <span className="head_decor">клубной карте</span>
        </h2>
        <Every_card_list data={every_card_data} />
      </div>
    </section>
  );
};
