import { Container, DirectionsList, Title } from "components";

export const AreasStudy = ({ keysList }: DirectionsKeysType) => {
  return (
    <Container>
      <section className="py-12">
        <div className="m-auto w-full max-w-[1080px] 2xl:max-w-[1440px] 3xl:max-w-[1780px]">
          <Title className="mb-4 lg:mb-8 3xl:mb-12">
            Направления <span className="text-customHeadDecor">занятий</span>
          </Title>
          <DirectionsList keysList={keysList} visibleElements={9} />
        </div>
      </section>
    </Container>
  );
};
