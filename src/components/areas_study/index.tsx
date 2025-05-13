import { Container, Directions_list } from "components";

export const Areas_study = ({ keys_list }: Directions_keys_type) => {
  if (!keys_list || keys_list.length === 0) return null;

  return (
    <Container>
      <section className="py-12">
        <div className="w-full max-w-[1080px] m-auto">
          <h2 className="mb-10">
            Направления <span className="head_decor">занятий</span>
          </h2>
          <Directions_list keys_list={keys_list} />
        </div>
      </section>
    </Container>
  );
};
