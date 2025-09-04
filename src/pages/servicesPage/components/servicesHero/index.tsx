import { Hero } from "@/components";
import { servicesData } from "@/constans/heroData";

export const ServicesHero = () => {
  return (
    <Hero data={servicesData}>
      <p className="mb-7 text-xl md:mb-10 lg:mb-12 xl:text-lg 2xl:text-2xl 3xl:text-3xl">
        Занятия фитнесом – это микс эффективных упражнений, мотивирующего
        влияния тренера, духа соревнований и общения с единомышленниками. Члены
        клуба Мореон Фитнес получают доступ к тренажерному залу, бассейнам,
        скалодрому и 40 видам групповых занятий для разного уровня подготовки и
        возраста – от начинающих до продвинутых спортсменов, для детей и
        взрослых.
      </p>
    </Hero>
  );
};
