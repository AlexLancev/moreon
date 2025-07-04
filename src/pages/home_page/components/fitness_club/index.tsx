import { fitness_club_list } from "@/constans";
import { Container, Title } from "@/components";

export const Fitness_club = () => {
  if (!fitness_club_list || fitness_club_list.length === 0) return null;

  return (
    <Container>
      <section className="before:clip-[polygon(0_0,_100%_0,_100%_100%,_0_25%)] relative my-12 p-10 before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[#33b0aa] before:opacity-10 before:[-webkit-clip-path:polygon(0_0,_100%_0,_100%_100%,_0_25%)]">
        <Title className="mb-4 md:mb-6 lg:mb-8 2xl:mb-12">
          <span className="customHeadDecor">Фитнес-клуб</span> Moreon Fitness!
        </Title>
        <ul className="relative overflow-hidden rounded-3xl p-10 after:absolute after:inset-0 after:h-full after:w-full after:bg-fitnes-club-gradient-custom after:opacity-70 after:blur-[2px]">
          {fitness_club_list.map(({ description }, idx: number) => (
            <li key={idx} className="mb-5 text-lg last:mb-0">
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};
