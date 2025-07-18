import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import { Container, Stock, Title } from "@/components";

import { get_tabs_store } from "@/stores";
import { team_store } from "@/stores/data_store";

import { Fitness_area, Profitable_visits } from "../about_page/components";

const Person_team_page = observer(() => {
  const { data, isLoading, isError } = team_store;
  const { name } = useParams();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: не удалось получить данные</div>;

  if (!data || data.length === 0 || !name) {
    return <div>Нет доступных данных</div>;
  }
  const team_bd = toJS(data);
  const person = team_bd.find((el) => el.name === name);

  if (!person) return null;

  const {
    url_images: { webp, jpg },
    name: name_person,
    about_coach: {
      qualification,
      work_experience,
      contacts: { phone },
      education,
      specialization,
      achievements,
    },
  } = person;

  return (
    <>
      <section className="py-12">
        <Container>
          <div className="flex gap-10">
            <picture>
              <source srcSet={webp} type="image/webp" />
              <img
                className="overflow-hidden rounded-3xl"
                width={340}
                height={340}
                src={jpg}
                alt=""
                loading="lazy"
                aria-hidden
              />
            </picture>
            <div className="customInsertHTML max-w-[800px]">
              <Title>{name_person}</Title>
              <ul>
                <li>{qualification}</li>
                <li>Стаж работы: {work_experience}</li>
                <li>Телефон: {phone}</li>
              </ul>
              <strong>Специализация</strong>
              <div dangerouslySetInnerHTML={{ __html: specialization }}></div>
              <strong>Образование</strong>
              <div dangerouslySetInnerHTML={{ __html: education }}></div>
              <strong>Достижения</strong>
              <div dangerouslySetInnerHTML={{ __html: achievements }}></div>
            </div>
          </div>
        </Container>
      </section>
      <Stock />
      <Fitness_area
        tabs_store={
          get_tabs_store("component_fitness_area") as Fitness_area_tabs_type
        }
      />
      <Profitable_visits />
    </>
  );
});

export default Person_team_page;
