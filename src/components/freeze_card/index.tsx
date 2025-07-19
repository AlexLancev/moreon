import { Snowflake as IconSnowflake } from "lucide-react";

import { Container, Title } from "@/components";

import { Button } from "../ui/button";

export const Freeze_card = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          Заморозь свою карту{" "}
          <span className="text-customHeadDecor">Moreon</span>
        </Title>
        <div className="gap-x-8 lg:flex lg:justify-between lg:*:w-1/2">
          <div className="mb-10 xs:[&>p]:text-xl xl:[&>p]:text-xl 2xl:[&>p]:text-3xl">
            <p>
              Если у вас появилась потребность заморозить клубную карту, вы
              можете сделать это в приложении, на сайте, через вашего
              персонального менеджера, если данная услуга предусмотрена
              Договором.
            </p>
            <p className="mb-5">
              Минимальная продолжительность приостановления действия Клубной
              карты составляет 10 календарных дней.
            </p>
            <p className="mb-10">
              Заморозка – лучший помощник в ситуациях, когда нужно отложить
              занятия фитнесом.
            </p>
            <Button>
              Заморозить карту <IconSnowflake />
            </Button>
          </div>
          <div className="relative after:absolute after:inset-0 after:h-full after:w-full after:bg-freeze-gradient-custom">
            <picture>
              <source
                srcSet="/images/freeze_card/freez.webp"
                type="image/webp"
              />
              <img
                className="w-full"
                src="/images/freeze_card/freez.png"
                alt=""
                loading="lazy"
                aria-hidden
              />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
};
