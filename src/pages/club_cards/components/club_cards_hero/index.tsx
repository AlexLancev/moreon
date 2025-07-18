import { Hero } from "@/components";

import { clubCardsData } from "@/constans/heroData";

export const Club_cards_hero = () => {
  return (
    <Hero data={clubCardsData}>
      <p className="mb-5 text-lg">
        С клубной картой Мореон Фитнес вы становитесь членом клуба
        профессионалов и любителей спорта и здорового образа жизни. Сотрудников
        и клиентов Мореон Фитнес объединяет общая идея - "Присоединись к
        уникальности – стань уникальным!".
      </p>
    </Hero>
  );
};
