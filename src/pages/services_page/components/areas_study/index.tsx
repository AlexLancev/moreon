import { Directions_list } from "components";

const keys_list = [
  "mind_body",
  "strength_functional_training",
  "aerobics",
  "gym",
  "pool",
  "martial_arts",
  "dance",
  "personal_training",
  "yoga",
  "test",
  "kids_fitnes",
  "group_training",
];

export const Areas_study = () => {
  return (
    <section>
      <div className="container">
        <h2 className="mb-10">
          Направления <span className="head_decor">занятий</span>
        </h2>
        <Directions_list keys_list={keys_list} />
      </div>
    </section>
  );
};
