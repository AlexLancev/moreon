import { cn } from "@/lib/utils";
import { modal_store } from "@/stores";
import { validateImagePath } from "@/utils";

import { Container } from "../container";
import { Title } from "../title";
import { Button } from "../ui/button";

export const Hero = ({
  data,
  children,
  className,
  isOpaque,
}: HeroPropsTypes) => {
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
      <section
        className={cn(
          "relative px-3 py-8 xxs:px-6 lg:px-10 lg:py-12 2xl:px-12 2xl:py-16",
          className,
        )}
      >
        {urlImageWebp && urlImageFallback && (
          <picture>
            <source srcSet={`/images/${urlImageWebp}`} type="image/webp" />
            <img
              className={cn(
                "absolute inset-0 -z-10 h-full w-full object-cover",
                isOpaque && "opacity-10",
              )}
              src={`/images/${urlImageFallback}`}
              alt=""
              loading="lazy"
              aria-hidden
            />
          </picture>
        )}
        <div className="relative z-10 w-full md:max-w-[700px] 2xl:max-w-[1200px]">
          {general && (
            <Title className="mb-3 text-2xl md:mb-5 xl:mb-8">
              {general}{" "}
              {decor && <span className="text-customHeadDecor">{decor}</span>}
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
