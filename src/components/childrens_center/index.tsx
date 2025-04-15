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
  return (
    <div className="container">
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
            />
          </picture>
          <div>
            <h2 className="mb-5">Детский центр</h2>
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
            <button
              className="text-white py-4 px-7 2xl:py-5 2xl:px-8 2xl:text-[1.75rem] rounded-xl bg-[rgb(45,154,148)] hover:bg-[rgba(45,154,149,0.76)] shadow-custom-shadow duration-300 hover:translate-y-[1px]"
              type="button"
            >
              Записаться на бесплатное пробное занятие
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
