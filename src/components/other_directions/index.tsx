import { Container, Directions_list, Title } from "components";

const key_list: Direct_keys_type[] = ["childrens_swimming", "infant_swimming"];

export const Other_directions = () => {
  return (
    <section className="py-12">
      <Container>
        <Title className="mb-3 md:mb-6 lg:mb-8 2xl:mb-12">
          Другие <span className="text-customHeadDecor">направления</span>
        </Title>
        <Directions_list keys_list={key_list} />
      </Container>
    </section>
  );
};
