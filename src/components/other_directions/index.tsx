import { Container, Directions_list } from "components";

const key_list: Direct_keys_type[] = ["childrens_swimming", "infant_swimming"];

export const Other_directions = () => {
  return (
    <section className="py-12">
      <Container>
        <h2 className="mb-10">
          Другие <span className="head_decor">направления</span>
        </h2>
        <Directions_list keys_list={key_list} />
      </Container>
    </section>
  );
};
