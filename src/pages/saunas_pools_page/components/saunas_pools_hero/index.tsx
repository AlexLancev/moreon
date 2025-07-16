import { NotebookText } from "lucide-react";

import { Container, Hero, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { modal_store } from "@/stores";
import { saunasPoolsData } from "@/constans/heroData";

export const Saunas_pools_hero = () => {

  return (
    <Hero data={saunasPoolsData} isOpaque>
      <p className="mb-4">
        Мореон Фитнес предоставляет своим клиентам уникальные возможности для
        отдыха и оздоровления.
      </p>
      <p className="mb-4">
        Члены клуба Мореон получают доступ к спортивному бассейну, бассейну
        «Золотые рыбки», банному комплексу «Термы» и пространству Мореон SPA. В
        раздевалках фитнес-клуба работает солярий.
      </p>
      <p className="mb-6">
        В этом разделе Вы можете подробнее ознакомиться с велнесс-возможностями
        Мореон Фитнес.
      </p>
    </Hero>
  );
};
