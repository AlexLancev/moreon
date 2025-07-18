import { Container, Directions_list, Title } from "components";

export const Areas_study = ({ keys_list }: Directions_keys_type) => {
  if (!keys_list || keys_list.length === 0) return null;

  return (
    <Container>
      <section className="py-12">
        <div className="m-auto w-full max-w-[1080px] 2xl:max-w-[1440px] 3xl:max-w-[1780px]">
          <Title className="mb-4 lg:mb-8 3xl:mb-12">
            Направления <span className="text-customHeadDecor">занятий</span>
          </Title>
          <Directions_list keys_list={keys_list} />
        </div>
      </section>
    </Container>
  );
};
