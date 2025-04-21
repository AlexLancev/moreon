import { Directions_list } from "components";

const key_list = [
  "childrens_swimming",
  "martial_arts_children",
  "children_center",
  "infant_swimming",
];

export const Other_directions = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-10">
          Другие <span className="head_decor">направления</span>
        </h2>
        <Directions_list keys_list={key_list} />
      </div>
    </section>
  );
};
