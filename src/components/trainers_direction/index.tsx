import { Team_list } from "components";

type Trainers_direction_type = {
  direction: "martial_arts" | "gym" | "group_training" | "pool";
};

export const Trainers_direction = ({ direction }: Trainers_direction_type) => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          Тренеры <span className="head_decor">направления</span>
        </h2>
        <Team_list isActiveTab={direction} />
      </div>
    </section>
  );
};
