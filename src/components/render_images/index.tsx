import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";

type RenderImageType = {
  url_xxxl_img_webp: string;
  url_xxxl_img_jpg: string;
  url_xxl_img_webp: string;
  url_xxl_img_jpg: string;
  url_xl_img_webp: string;
  url_xl_img_jpg: string;
  label: string;
};

export const Render_image = ({
  data_image: {
    url_xxxl_img_webp,
    url_xxxl_img_jpg,
    url_xxl_img_webp,
    url_xxl_img_jpg,
    url_xl_img_webp,
    url_xl_img_jpg,
    label,
  },
}: {
  data_image: RenderImageType;
}) => {
  const innerWidth = useGettingWindowWidth();

  return (
    <picture>
      <source
        srcSet={`${url_xxxl_img_webp} 2x, ${url_xxl_img_webp} 1x`}
        type="image/webp"
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`${url_xxxl_img_jpg} 2x, ${url_xxl_img_jpg} 1x`}
        media="(min-width: 1440px)"
      />

      <source
        srcSet={`${url_xxl_img_webp} 2x`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source srcSet={`${url_xxl_img_jpg} 2x`} media="(min-width: 768px)" />

      <source
        srcSet={`${url_xl_img_webp} 2x`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source srcSet={`${url_xl_img_jpg} 2x`} media="(min-width: 320px)" />

      <img
        className="w-full m-auto lg:object-cover"
        style={{ height: innerWidth > 1024 ? "calc(100vh - 115.34px)" : "" }}
        src={url_xxl_img_jpg}
        alt={label}
        loading="lazy"
      />
    </picture>
  );
};
