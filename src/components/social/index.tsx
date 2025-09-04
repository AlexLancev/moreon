import { cn } from "@/lib/utils";

const dataSocial = [
  {
    label: "Открыть Instagram в новой вкладке",
    urlExterne: "https://www.instagram.com/moreonfitness/",
    urlPngIcon: "/images/social/instagram.png",
    urlWebpIcon: "/images/social/instagram.webp",
    urlSvgIcon: "/images/social/instagram.svg",
  },
  {
    label: "Открыть Telegram в новой вкладке",
    urlExterne: "https://t.me/moreonfitness/",
    urlPngIcon: "/images/social/telegram.png",
    urlWebpIcon: "/images/social/telegram.webp",
    urlSvgIcon: "/images/social/telegram.svg",
  },
  {
    label: "Открыть VK в новой вкладке",
    urlExterne: "https://vk.com/moreonfitness",
    urlPngIcon: "/images/social/vk.png",
    urlWebpIcon: "/images/social/vk.webp",
    urlSvgIcon: "/images/social/vk.svg",
  },
];

type SocialPropsType = {
  className?: string;
};

export const Social = ({ className }: SocialPropsType) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-x-7 2xl:gap-x-8 3xl:gap-x-8",
        className,
      )}
    >
      {dataSocial?.map(
        (
          { label, urlExterne, urlPngIcon, urlWebpIcon, urlSvgIcon },
          idx: number,
        ) => (
          <li key={idx}>
            <a
              className="opacity-80 transition duration-300 hover:opacity-100"
              href={urlExterne}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source srcSet={urlSvgIcon} type="image/svg+xml" />
                <source srcSet={urlWebpIcon} type="image/webp" />
                <img
                  className="w-[17px] xl:w-[20px] 2xl:w-[24px] 3xl:w-[30px]"
                  src={urlPngIcon}
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
