import { NotebookText } from "lucide-react";

import { Container, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { modal_store } from "@/stores";

export const Team_hero = () => {
  const { isVisibleModal, change_modal } = modal_store;

  return (
    <Container>
      <section className="relative py-20 px-10 after:absolute after:inset-0 before:absolute before:left-28 before:top-28 before:w-[138px] before:h-[138px] before:rounded-full before:bg-[#0b8c86] before:blur-[100px]">
        <picture>
          <source srcSet="/images/team_hero/hero.webp" type="image/webp" />
          <img
            className="absolute inset-0 -z-10 object-cover w-full h-full opacity-10"
            src="/images/team_hero/hero.jpeg"
            alt=""
            aria-hidden
          />
        </picture>
        <div className="relative z-10">
          <Title size="xl">Наша команда</Title>
          <Button onClick={() => change_modal(!isVisibleModal)}>
            Гостевой визит <NotebookText />
          </Button>
        </div>
      </section>
    </Container>
  );
};
