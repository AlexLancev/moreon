import { contacts_data } from "constans";
import classNames from "classnames";

import { isEmptyObj } from "@/utils";

type feedback_data_type = "address" | "phone";

const feedback_data: feedback_data_type[] = ["address", "phone"];

type Feedback_props_type = {
  className?: string;
};

export const Feedback = ({ className }: Feedback_props_type) => {
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
          <li key={idx} className="flex items-center gap-x-2">
            <picture>
              <source
                srcSet={contacts_data[contact]?.images_url?.svg}
                type="image/svg+xml"
              />
              <img
                width={17}
                src={contacts_data[contact]?.images_url?.png}
                alt=""
                aria-hidden
              />
            </picture>
            <a
              href={contacts_data[contact]?.path}
              className="transition duration-300 hover:text-[rgb(255,255,255)] 2xl:text-[1.25rem]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contacts_data[contact]?.name === "Адрес" ? (
                <address>{contacts_data[contact]?.text}</address>
              ) : (
                contacts_data[contact]?.text
              )}
            </a>
          </li>
        ))}
      </ul>
    ))
  );
};
