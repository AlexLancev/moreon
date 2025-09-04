import { Hero } from "@/components";
import { saunasPoolsData } from "@/constans/heroData";

export const SaunasPoolsHero = () => {
  return (
    <Hero data={saunasPoolsData} isOpaque>
      <div className="*:mb-4 *:lg:mb-6 *:xl:text-lg *:2xl:mb-8 *:2xl:text-2xl *:3xl:text-3xl">
        <p>
          Мореон Фитнес предоставляет своим клиентам уникальные возможности для
          отдыха и оздоровления.
        </p>
        <p>
          Члены клуба Мореон получают доступ к спортивному бассейну, бассейну
          «Золотые рыбки», банному комплексу «Термы» и пространству Мореон SPA.
          В раздевалках фитнес-клуба работает солярий.
        </p>
        <p>
          В этом разделе Вы можете подробнее ознакомиться с
          велнесс-возможностями Мореон Фитнес.
        </p>
      </div>
    </Hero>
  );
};
