import { fitness_club_list } from "@/constans";

export const Fitness_club = () => {
  if (!fitness_club_list || fitness_club_list.length === 0) return null;

  return (
    <div className="container">
      <section className="p-10 my-12 fitness_club_decor">
        <h2 className="mb-10">
          <span className="head_decor">Фитнес-клуб</span> Moreon Fitness
        </h2>
        <ul className="fitness_club_list">
          {fitness_club_list.map(({ description }, idx: number) => (
            <li key={idx} className="text-lg [&:not(:last-child)]:mb-5">
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
