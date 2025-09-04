import { NotebookText as IconNotebookText } from "lucide-react";

import { Container, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { modalStore } from "@/stores";

export const ChildrensCenter = () => {
  const { isVisibleModal, changeModal } = modalStore;

  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          Детский <span className="text-customHeadDecor">центр</span>
        </Title>
        <div className="md:flex md:items-start md:justify-between md:gap-x-6 xl:gap-x-8 2xl:gap-x-12">
          <picture className="flex-shrink-0">
            <source
              srcSet="/images/childrens_center/child_1.webp"
              type="image/webp"
            />
            <img
              className="m-auto mb-8 w-auto overflow-hidden rounded-3xl object-cover md:mb-0 md:w-80 xl:w-auto"
              src="/images/childrens_center/child_1.jpeg"
              alt="На изображении группа людей в одинаковых синих футболках стоит в помещении, вероятно, в офисе или центре обслуживания. Впереди стоят три человека: два мужчины и одна женщина, которые присели на колено. Остальные участники группы стоят позади них, улыбаясь и демонстрируя профессиональный подход. На заднем плане виден баннер с надписью 'Детский Центр Мореон' и логотипом, а также телевизор, показывающий спортивное видео. Обстановка выглядит организованной и дружественной."
              aria-label="На изображении группа людей в одинаковых синих футболках стоит в помещении, вероятно, в офисе или центре обслуживания. Впереди стоят три человека: два мужчины и одна женщина, которые присели на колено. Остальные участники группы стоят позади них, улыбаясь и демонстрируя профессиональный подход. На заднем плане виден баннер с надписью 'Детский Центр Мореон' и логотипом, а также телевизор, показывающий спортивное видео. Обстановка выглядит организованной и дружественной."
              loading="lazy"
            />
          </picture>
          <div className="w-full xl:text-lg 2xl:text-2xl">
            <p className="mb-3 lg:mb-4 xl:mb-5">
              Детский Центр “Мореон” – это всесторонне развитие вашего ребенка
              от 2 месяцев до 16 лет. Наша задача – раскрыть способности ребенка
              через игру и теплые доверительные отношения. Опытные педагоги
              детского центра Мореон проводят занятия по особой методике,
              вызывая большой интерес к спорту, творчеству и науке. Футбол,
              танцы, бокс, плавание, гимнастика, скалолазание, изо, керамика,
              вокал – выбирайте, что по душе.
            </p>
            <p className="mb-3 lg:mb-4 xl:mb-5">
              Если Ваш ребенок еще не знает чем хочет заниматься в жизни и к
              чему у него есть предрасположенность — мы с удовольствием поможем
              разобраться в этом на пробных занятиях.
            </p>
            <p className="mb-5 lg:mb-6 xl:mb-7">
              Занятия в детском центре Мореон — залог здорового и гармоничного
              развития личности!
            </p>
            <Button onClick={() => changeModal(!isVisibleModal)}>
              Гостевой визит <IconNotebookText />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
