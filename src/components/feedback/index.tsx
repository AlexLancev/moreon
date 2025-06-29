import { contacts_data } from "constans";
import classNames from "classnames";

import { isEmptyObj } from "@/utils";
import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";

type feedback_data_type = "address" | "phone";

const feedback_data: feedback_data_type[] = ["address", "phone"];

type Feedback_props_type = {
  className?: string;
};

export const Feedback = ({ className }: Feedback_props_type) => {
  const innerWidth = useGettingWindowWidth();
  if (!contacts_data || isEmptyObj(contacts_data)) return null;

  return (
    !feedback_data ||
    (feedback_data.length !== 0 && (
      <ul
        className={classNames(
          "flex text-xs text-[rgba(255,255,255,0.8)]",
          className,
        )}
      >
        {feedback_data?.map((contact, idx: number) => (
          <li key={idx}>
            <a
              href={contacts_data[contact]?.path}
              className="flex items-center leading-normal gap-x-2 2xl:gap-x-3 transition duration-300 hover:text-[rgb(255,255,255)] 2xl:text-[1.25rem] 3xl:text-[1.75rem]"
              target="_blank"
              title={contacts_data[contact]?.label}
              rel="noopener noreferrer"
            >
              <span className="visually-hidden">
                {contacts_data[contact]?.label}
              </span>
              <picture>
                <source
                  srcSet={contacts_data[contact]?.images_url?.svg}
                  type="image/svg+xml"
                />
                <img
                  className="w-[17px] 2xl:w-[22px] 3xl:w-[27px]"
                  src={contacts_data[contact]?.images_url?.png}
                  alt=""
                  loading="lazy"
                  aria-hidden
                />
              </picture>
              {innerWidth > 634 && (
                <>
                  {contacts_data[contact]?.name === "Адрес" ? (
                    <address className="flex-1">
                      {contacts_data[contact]?.text}
                    </address>
                  ) : (
                    <span className="flex-1">
                      {contacts_data[contact]?.text}
                    </span>
                  )}
                </>
              )}
            </a>
          </li>
        ))}
      </ul>
    ))
  );
};
