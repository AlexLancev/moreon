import classNames from "classnames";

const data_social = [
  {
    label: "Открыть Instagram в новой вкладке",
    url_externe: "https://www.instagram.com/moreonfitness/",
    url_png_icon: "/images/social/instagram.png",
    url_webp_icon: "/images/social/instagram.webp",
    url_svg_icon: "/images/social/instagram.svg",
  },
  {
    label: "Открыть Telegram в новой вкладке",
    url_externe: "https://t.me/moreonfitness/",
    url_png_icon: "/images/social/telegram.png",
    url_webp_icon: "/images/social/telegram.webp",
    url_svg_icon: "/images/social/telegram.svg",
  },
  {
    label: "Открыть VK в новой вкладке",
    url_externe: "https://vk.com/moreonfitness",
    url_png_icon: "/images/social/vk.png",
    url_webp_icon: "/images/social/vk.webp",
    url_svg_icon: "/images/social/vk.svg",
  },
];

type Social_props_type = {
  className?: string;
};

export const Social = ({ className }: Social_props_type) => {
  return (
    <ul className={classNames("flex items-center gap-x-5", className)}>
      {data_social?.map(
        (
          { label, url_externe, url_png_icon, url_webp_icon, url_svg_icon },
          idx: number,
        ) => (
          <li key={idx}>
            <a
              className="opacity-80 transition duration-300 hover:opacity-100"
              href={url_externe}
              aria-label={label}
              title={label}
              target="_blanck"
              rel="noopener noreferrer"
            >
              <picture>
                <source srcSet={url_svg_icon} type="image/svg+xml" />
                <source srcSet={url_webp_icon} type="image/webp" />
                <img
                  className="w-[17px] 2xl:w-[22px] 3xl:w-[27px]"
                  src={url_png_icon}
                  alt={label}
                  loading="lazy"
                />
              </picture>
            </a>
          </li>
        ),
      )}
    </ul>
  );
};
