import { Container, Title } from "@/components";
import { Button } from "../ui/button";
import { Snowflake } from "lucide-react";

export const Freeze_card = () => {
  return (
    <section className="py-12">
      <Container>
        <Title>
          Заморозь свою карту <span className="head_decor">Moreon</span>
        </Title>
        <div className="flex justify-between gap-x-8">
          <div className="w-full max-w-[525px]">
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
              Заморозить карту <Snowflake />
            </Button>
          </div>
          <div className="freeze_decor">
            <picture>
              <source
                srcSet="/images/freeze_card/freez.webp"
                type="image/webp"
              />
              <img
                width={639}
                height={283}
                src="/images/freeze_card/freez.png"
                alt=""
                aria-hidden
              />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
};
