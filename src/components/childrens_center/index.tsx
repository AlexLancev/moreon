import { ClipboardPen } from "lucide-react";

import { Container, Title } from "@/components";
import { modal_store } from "@/stores";

import { Button } from "../ui/button";

const childrens_center_data = [
  {
    description: "Грудничковое плавание",
  },
  {
    description: "Спортивное плавание",
  },
  {
    description: "Единоборства, бокс, кикбоксинг и MMA",
  },
  {
    description: "Групповые и индивидуальные тренировки",
  },
  {
    description: "Спортивные мероприятия и соревнования",
  },
];

export const Childrens_center = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <Container>
      <section className="py-12">
        <div className="md:flex md:items-center md:justify-center md:gap-x-10">
          <picture className="flex-shrink-0">
            <source
              srcSet="/images/childrens_center/child.webp"
              type="image/webp"
            />
            <img
              className="m-auto w-96 xl:w-auto"
              src="/images/childrens_center/child.png"
              aria-label="Маленькая девочка в спортивной одежде сидит на гимнастическом мяче, демонстрируя улыбку и подняв руки в жесте 'показать мышцы'. Фон выполнен в черно-белых тонах с радиальными линиями, что создает динамичный и энергичный образ. Девочка выглядит активной и уверенной, демонстрируя интерес к физической активности."
              alt="Маленькая девочка в спортивной одежде сидит на гимнастическом мяче, демонстрируя улыбку и подняв руки в жесте 'показать мышцы'. Фон выполнен в черно-белых тонах с радиальными линиями, что создает динамичный и энергичный образ. Девочка выглядит активной и уверенной, демонстрируя интерес к физической активности."
              loading="lazy"
            />
          </picture>
          <div className="xl:text-xl 2xl:text-2xl">
            <Title className="mb-5">Детский центр</Title>
            <p className="mb-4">
              Детский возраст – лучшее время, для того чтобы приучать ребенка к
              здоровому образу жизни.
            </p>
            <p className="mb-4">
              Увлечем и заинтересуем юных спортсменов, в Moreon Fitness есть:
            </p>
            {childrens_center_data && childrens_center_data.length !== 0 && (
              <ul className="mb-4 list-disc space-y-1 pl-5 2xl:space-y-3">
                {childrens_center_data.map(({ description }, idx: number) => {
                  if (!description) return null;

                  return <li key={idx}>{description}</li>;
                })}
              </ul>
            )}
            <p className="mb-8">
              Пусть ваши дети растут сильными, здоровыми и активными!
            </p>
            <Button onClick={() => change_modal(!isVisibleModal)}>
              Записаться на бесплатное пробное занятие
              <ClipboardPen size={20} />
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};
