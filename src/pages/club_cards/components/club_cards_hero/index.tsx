import { Container, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { IdCard } from "lucide-react";

export const Club_cards_hero = () => {
  return (
    <Container>
      <section className="relative py-16 px-10 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source
            srcSet="/images/club_cards_hero/card.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 w-full h-full object-cover object-top -z-10"
            src="/images/club_cards_hero/card.jpg"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="w-full max-w-[525px]">
          <Title size="xl" className="mb-3">
            Клубные карты
          </Title>
          <p className="mb-5 text-lg">
            С клубной картой Мореон Фитнес вы становитесь членом клуба
            профессионалов и любителей спорта и здорового образа жизни.
            Сотрудников и клиентов Мореон Фитнес объединяет общая идея -
            "Присоединись к уникальности – стань уникальным!".
          </p>
          <Button className="mt-10">
            Выбрать клубную карту <IdCard />
          </Button>
        </div>
      </section>
    </Container>
  );
};
