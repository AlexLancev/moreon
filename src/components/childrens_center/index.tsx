import { ClipboardPen } from "lucide-react";

import { Button } from "../ui/button";

import { modal_store } from "@/stores";
import { Container, Title } from "@/components";

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
        <div className="flex items-center gap-x-10">
          <picture>
            <source
              srcSet="/images/childrens_center/child.webp"
              type="image/webp"
            />
            <img
              width={677}
              height={617}
              src="/images/childrens_center/child.png"
              aria-label="Маленькая девочка в спортивной одежде сидит на гимнастическом мяче, демонстрируя улыбку и подняв руки в жесте 'показать мышцы'. Фон выполнен в черно-белых тонах с радиальными линиями, что создает динамичный и энергичный образ. Девочка выглядит активной и уверенной, демонстрируя интерес к физической активности."
              alt="Маленькая девочка в спортивной одежде сидит на гимнастическом мяче, демонстрируя улыбку и подняв руки в жесте 'показать мышцы'. Фон выполнен в черно-белых тонах с радиальными линиями, что создает динамичный и энергичный образ. Девочка выглядит активной и уверенной, демонстрируя интерес к физической активности."
              loading="lazy"
            />
          </picture>
          <div>
            <Title className="mb-5">Детский центр</Title>
            <p className="mb-4">
              Детский возраст – лучшее время, для того чтобы приучать ребенка к
              здоровому образу жизни.
            </p>
            <p className="mb-4">
              Увлечем и заинтересуем юных спортсменов, в Moreon Fitness есть:
            </p>
            {childrens_center_data && childrens_center_data.length !== 0 && (
              <ul className="mb-4 list-disc pl-5">
                {childrens_center_data.map(({ description }, idx: number) => {
                  if (!description) return null;

                  return (
                    <li className="[&:not(:last-child)]:mb-1" key={idx}>
                      {description}
                    </li>
                  );
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
