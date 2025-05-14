import { Container, Directions_list, Title } from "components";

export const Areas_study = ({ keys_list }: Directions_keys_type) => {
  if (!keys_list || keys_list.length === 0) return null;

  return (
    <Container>
      <section className="py-12">
        <div className="w-full max-w-[1080px] m-auto">
          <Title>
            Направления <span className="head_decor">занятий</span>
          </Title>
          <Directions_list keys_list={keys_list} />
        </div>
      </section>
    </Container>
  );
};
