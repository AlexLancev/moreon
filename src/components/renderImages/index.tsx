import { useGettingWindowWidth } from "@/hooks";

interface RenderImageType {
  urlXxxlImgWebp: string;
  urlXxxlImgJpg: string;
  urlXxlImgWebp: string;
  urlXxlImgJpg: string;
  urlXlImgWebp: string;
  urlXlImgJpg: string;
  label: string;
}

export const RenderImage = ({
  dataImage: {
    urlXxxlImgWebp,
    urlXxxlImgJpg,
    urlXxlImgWebp,
    urlXxlImgJpg,
    urlXlImgWebp,
    urlXlImgJpg,
    label,
  },
}: {
  dataImage: RenderImageType;
}) => {
  const innerWidth = useGettingWindowWidth();

  return (
    <picture>
      <source
        srcSet={`${urlXxxlImgWebp} 2x, ${urlXxlImgWebp} 1x`}
        type="image/webp"
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`${urlXxxlImgJpg} 2x, ${urlXxlImgJpg} 1x`}
        media="(min-width: 1440px)"
      />

      <source
        srcSet={`${urlXxlImgWebp} 2x`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source srcSet={`${urlXxlImgJpg} 2x`} media="(min-width: 768px)" />

      <source
        srcSet={`${urlXlImgWebp} 2x`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source srcSet={`${urlXlImgJpg} 2x`} media="(min-width: 320px)" />

      <img
        className="m-auto w-full lg:object-cover"
        style={{ height: innerWidth > 1024 ? "calc(100vh - 115.34px)" : "" }}
        src={urlXxlImgJpg}
        alt={label}
        loading="lazy"
      />
    </picture>
  );
};
