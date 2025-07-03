import { NotebookText } from "lucide-react";

import { Container, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { modal_store } from "@/stores";

export const Services_hero = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <Container>
      <section className="px-20 pt-12 pb-24 relative">
        <picture>
          <source
            srcSet="/images/services_hero/service_bg.webp"
            type="image/webp"
          />
          <img
            className="absolute inset-0 -z-10 w-full h-full object-cover"
            src="/images/services_hero/service_bg.png"
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <div className="w-full max-w-[700px]">
          <Title className="mb-8">
            Услуги <span className="customHeadDecor">Moreon Fitness</span>
          </Title>
          <p className="mb-14 text-xl">
            Занятия фитнесом – это микс эффективных упражнений, мотивирующего
            влияния тренера, духа соревнований и общения с единомышленниками.
            Члены клуба Мореон Фитнес получают доступ к тренажерному залу,
            бассейнам, скалодрому и 40 видам групповых занятий для разного
            уровня подготовки и возраста – от начинающих до продвинутых
            спортсменов, для детей и взрослых.
          </p>
          <Button onClick={() => change_modal(!isVisibleModal)}>
            Гостевой визит <NotebookText />
          </Button>
        </div>
      </section>
    </Container>
  );
};
