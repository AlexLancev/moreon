import { Container, Title } from "@/components";
import { fitness_club_list } from "@/constans";

export const Fitness_club = () => {
  if (!fitness_club_list || fitness_club_list.length === 0) return null;

  return (
    <Container>
      <section className="p-10 my-12 fitnes_decor">
        <Title>
          <span className="head_decor">Фитнес-клуб</span> Moreon Fitness
        </Title>
        <ul className="fitness_club_list">
          {fitness_club_list.map(({ description }, idx: number) => (
            <li key={idx} className="text-lg [&:not(:last-child)]:mb-5">
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};
