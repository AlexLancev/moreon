import { modal_store } from "@/stores";
import { Container } from "../container";
import { Title } from "../title";
import { Button } from "../ui/button";
import classNames from "classnames";
import { validateImagePath } from "@/utils";

export const Hero = ({
  data,
  children,
  className,
  isOpaque,
}: HeroPropsType) => {
  const { isVisibleModal, change_modal } = modal_store;
  if (!data) return null;

  const {
    images_url,
    title: { general, decor },
    button: { iconBtn, label },
  } = data;

  const urlImageWebp = images_url?.webp ?? "";
  const urlImageFallback = images_url?.png ?? images_url?.jpg ?? "";
  const isValidWebp = validateImagePath(urlImageWebp, ["webp"]);
  const isValidFallback = validateImagePath(urlImageFallback, [
    "png",
    "jpg",
    "jpeg",
  ]);

  if (urlImageWebp && !isValidWebp) {
    console.warn(`Некорректный путь к WebP-изображению: "${urlImageWebp}"`);
  }

  if (urlImageFallback && !isValidFallback) {
    console.warn(
      `Некорректный путь к fallback-изображению: "${urlImageFallback}"`,
    );
  }

  return (
    <Container>
      <section className={classNames("relative px-20 pb-24 pt-12", className)}>
        {urlImageWebp && urlImageFallback && (
          <picture>
            <source srcSet={`/images/${urlImageWebp}`} type="image/webp" />
            <img
              className={classNames(
                "absolute inset-0 -z-10 h-full w-full object-cover",
                { "opacity-10": isOpaque },
              )}
              src={`/images/${urlImageFallback}`}
              alt=""
              loading="lazy"
              aria-hidden
            />
          </picture>
        )}
        <div className="relative z-10 w-full max-w-[700px]">
          {general && (
            <Title className="mb-8">
              {general} <span className="text-customHeadDecor">{decor}</span>
            </Title>
          )}
          {children}
          {(label || iconBtn) && (
            <Button onClick={() => change_modal(!isVisibleModal)}>
              {label} {iconBtn}
            </Button>
          )}
        </div>
      </section>
    </Container>
  );
};
