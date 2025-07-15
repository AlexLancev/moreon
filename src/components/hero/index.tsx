import { modal_store } from "@/stores";
import { Container } from "../container";
import { Title } from "../title";
import { Button } from "../ui/button";
import classNames from "classnames";

export const Hero = ({ children, data, className }: HeroPropsType) => {
  const { isVisibleModal, change_modal } = modal_store;
  if (!data) return null;

	const {title: {general, decor}, images_url, iconBtn} = data;

  return (
    <Container>
      <section className={classNames("relative px-20 pb-24 pt-12", className)}>
				{images_url && (
					<picture>
						<source
							srcSet={`/images/${images_url?.webp ?? ""}`}
							type="image/webp"
						/>
						<img
							className="absolute inset-0 -z-10 h-full w-full object-cover"
							src={`/images/${images_url?.png ?? ""}`}
							alt=""
							loading="lazy"
							aria-hidden
						/>
					</picture>
				)}
        <div className="w-full max-w-[700px]">
          <Title className="mb-8">
            {general} <span className="text-customHeadDecor">{decor}</span>
          </Title>
          {children}
          <Button onClick={() => change_modal(!isVisibleModal)}>
            Гостевой визит {iconBtn}
          </Button>
        </div>
      </section>
    </Container>
  );
};
