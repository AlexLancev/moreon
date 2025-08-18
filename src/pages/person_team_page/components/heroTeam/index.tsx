import { toJS } from "mobx";
import { useParams } from "react-router-dom";

import { Title } from "@/components";
import { heroTeamDefault } from "@/constans";

export const HeroTeam = ({ data }: { data: Team_type[] }) => {
  const { name } = useParams();
  const person = toJS(data)?.find((el) => el.name === name);

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
  } = person ?? heroTeamDefault;

  return (
    <div className="flex gap-10">
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img
          className="overflow-hidden rounded-3xl"
          width={340}
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
  );
};
