import { contactsData } from "constans";

import { useGettingWindowWidth } from "@/hooks";
import { cn } from "@/lib/utils";
import { isEmptyObj } from "@/utils";

const feedbackData = ["address", "phone"] as const;

interface FeedbackPropsType {
  className?: string;
}

export const Feedback = ({ className }: FeedbackPropsType) => {
  const innerWidth = useGettingWindowWidth();
  if (!contactsData || isEmptyObj(contactsData)) return null;

  return (
    <ul className={cn("flex gap-x-7 text-[rgba(255,255,255,0.8)]", className)}>
      {feedbackData.map((contact, idx: number) => (
        <li key={idx}>
          <a
            href={contactsData[contact]?.path}
            className="group flex items-center gap-x-4 leading-normal transition duration-300 hover:text-[rgb(255,255,255)] md:gap-x-2 lg:gap-x-2 xl:text-base 2xl:text-xl 3xl:text-2xl"
            target="_blank"
            title={contactsData[contact]?.label}
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">
              {contactsData[contact]?.label}
            </span>
            <picture>
              <source
                srcSet={contactsData[contact]?.imagesUrl?.svg}
                type="image/svg+xml"
              />
              <img
                className="w-[17px] opacity-80 duration-300 group-hover:opacity-100 xl:w-[20px] 2xl:w-[24px] 3xl:w-[30px]"
                src={contactsData[contact]?.imagesUrl?.png}
                alt=""
                loading="lazy"
                aria-hidden
              />
            </picture>
            {innerWidth > 768 && (
              <>
                {contactsData[contact]?.name === "Адрес" ? (
                  <address className="flex-1">
                    {contactsData[contact]?.text}
                  </address>
                ) : (
                  <span className="flex-1">{contactsData[contact]?.text}</span>
                )}
              </>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};
