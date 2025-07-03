import { Container, Directions_list, Title } from "components";

import { sizeTitleData } from "@/constans";
import { useGetResponsiveValue } from "@/utils";

export const Areas_study = ({ keys_list }: Directions_keys_type) => {
  const size = useGetResponsiveValue<TitleSize>("md", sizeTitleData);
  if (!keys_list || keys_list.length === 0) return null;

  return (
    <Container>
      <section className="py-12">
        <div className="w-full max-w-[1080px] m-auto">
          <Title fontSize={size} className="mb-4 lg:mb-8 3xl:mb-12">
            Направления <span className="customHeadDecor">занятий</span>
          </Title>
          <Directions_list keys_list={keys_list} />
        </div>
      </section>
    </Container>
  );
};
