import { Container, Title } from "@/components";
import { fitness_club_list, sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

export const Fitness_club = () => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);
  if (!fitness_club_list || fitness_club_list.length === 0) return null;

  return (
    <Container>
      <section className="relative p-10 my-12 before:absolute before:top-0 before:left-0 before:bg-[#33b0aa] before:w-full before:h-full before:opacity-10 before:clip-[polygon(0_0,_100%_0,_100%_100%,_0_25%)] before:[-webkit-clip-path:polygon(0_0,_100%_0,_100%_100%,_0_25%)] before:pointer-events-none before:z-10">
        <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
          <span className="customHeadDecor">Фитнес-клуб</span> Moreon Fitness!
        </Title>
        <ul className="relative p-10 rounded-3xl overflow-hidden after:absolute after:inset-0 after:w-full after:h-full after:blur-[2px] after:opacity-70 after:bg-fitnes-club-gradient-custom">
          {fitness_club_list.map(({ description }, idx: number) => (
            <li key={idx} className="text-lg mb-5 last:mb-0">
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};
