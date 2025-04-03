import { Profitable_list } from "components";

const profitable_visits_data = [
  {
    head: "Красивая фигура",
    profitable_visits_list: [
      "Выбирайте быть красивыми, здоровыми и гармоничными",
      "Спорт, релакс, массажи и спа-процедуры",
    ],
    images_url: {
      png: "/images/profitable_visits/profit-1.png",
      webp: "/images/profitable_visits/profit-1.webp",
    },
  },
  {
    head: "Комфорт",
    profitable_visits_list: [
      "15 000 м² для тренировок и отдыха",
      "Панорамные окна и высокие потолки",
      "Настоящий оазис в городских джунглях",
    ],
    images_url: {
      png: "/images/profitable_visits/profit-2.png",
      webp: "/images/profitable_visits/profit-2.webp",
    },
  },
  {
    head: "Подходит всем",
    profitable_visits_list: [
      "Фитнес программы для всех уровней подготовки",
      "Групповые и индивидуальные занятия",
    ],
    images_url: {
      png: "/images/profitable_visits/profit-3.png",
      webp: "/images/profitable_visits/profit-3.webp",
    },
  },
  {
    head: "Сервис",
    profitable_visits_list: [
      "Фитнес тестирование",
      "Фито бар",
      "Моб приложение",
      "Полотенце и халат",
    ],
    images_url: {
      png: "/images/profitable_visits/profit-4.png",
      webp: "/images/profitable_visits/profit-4.webp",
    },
  },
];

export const Profitable_visits = () => {
  if (!profitable_visits_data || profitable_visits_data.length === 0)
    return null;

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          Выгоды посещения <span className="head_decor">фитнес клуба</span>
        </h2>
        <Profitable_list profitable_data={profitable_visits_data} />
      </div>
    </section>
  );
};
