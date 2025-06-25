import { NotebookText } from "lucide-react";

import { Container, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { modal_store } from "@/stores";

export const Saunas_pools_hero = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <Container>
      <section className="relative py-20 px-10 after:absolute after:inset-0 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source srcSet="/images/saunas_pools_hero/hero_bg.webp" />
          <img
            className="absolute inset-0 -z-10 w-full h-full object-cover opacity-10"
            src="/images/saunas_pools_hero/hero_bg.jpeg"
            alt=""
            loading="lazy"
            aria-hidden
          />
        </picture>
        <div className="relative z-10 w-full max-w-[625px] text-lg">
          <Title size="xl" className="mb-6">
            ани и бассейны
          </Title>
          <p className="mb-4">
            Мореон Фитнес предоставляет своим клиентам уникальные возможности
            для отдыха и оздоровления.
          </p>
          <p className="mb-4">
            Члены клуба Мореон получают доступ к спортивному бассейну, бассейну
            «Золотые рыбки», банному комплексу «Термы» и пространству Мореон
            SPA. В раздевалках фитнес-клуба работает солярий.
          </p>
          <p className="mb-6">
            В этом разделе Вы можете подробнее ознакомиться с
            велнесс-возможностями Мореон Фитнес.
          </p>
          <Button onClick={() => change_modal(!isVisibleModal)}>
            Гостевой визит <NotebookText />
          </Button>
        </div>
      </section>
    </Container>
  );
};
