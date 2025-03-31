const other_directions_data = [
  {
    to_link: "https://more-on.ru/",
    descriptions: "Перейти на другой сайт Многофункциональный комплекс Мореон",
    images_url: {
      png: "/images/other_directions/аква.png",
      webp: "/images/other_directions/аква.webp",
    },
  },
  {
    to_link: "https://therm.more-on.ru/",
    descriptions: "Перейти на другой сайт Термы Мореон",
    images_url: {
      png: "/images/other_directions/термы.png",
      webp: "/images/other_directions/термы.webp",
    },
  },
  {
    to_link: "https://spa.more-on.ru/",
    descriptions: "Перейти на другой сайт Мореон СПА",
    images_url: {
      png: "/images/other_directions/спа.png",
      webp: "/images/other_directions/спа.webp",
    },
  },
  {
    to_link: "https://bowling.more-on.ru/",
    descriptions: "Перейти на другой сайт Мореон Боулинг и Караоке",
    images_url: {
      png: "/images/other_directions/боулинг.png",
      webp: "/images/other_directions/боулинг.webp",
    },
  },
  {
    to_link: "https://more-on.ru/restaurants/",
    descriptions: "Перейти на другой сайт Кафе ресторан ПОРТ",
    images_url: {
      png: "/images/other_directions/порт.png",
      webp: "/images/other_directions/порт.webp",
    },
  },
];

export const Other_directions = () => {
  if (!other_directions_data || other_directions_data.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="visually-hidden">Наши другие направления</h2>
      <div className="container">
        <ul className="flex items-center justify-around gap-4">
          {other_directions_data.map(({ to_link, descriptions, images_url: { png, webp } }, idx: number) => (
            <li key={idx}>
              <a href={to_link} target="_blank" rel="noopener noreferrer" title={descriptions}>
                <span className="visually-hidden">{descriptions}</span>
                <picture>
                  <source srcSet={webp} type="image/webp" />
                  <img src={png} alt="" aria-hidden />
                </picture>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
