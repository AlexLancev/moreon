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

export const Social = () => {
  return (
    <ul className="flex items-center gap-x-5">
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
                <source width={17} srcSet={url_svg_icon} type="image/svg+xml" />
                <source srcSet={url_webp_icon} type="image/webp" />
                <img src={url_png_icon} alt={label} />
              </picture>
            </a>
          </li>
        ),
      )}
    </ul>
  );
};
