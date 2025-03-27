import { contacts_data } from "constans";

type feedback_data_type = "address" | "phone";

const feedback_data: feedback_data_type[] = ["address", "phone"];

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

export const Feedback = () => {
  if (
    !contacts_data ||
    isEmptyObj(contacts_data) ||
    !feedback_data ||
    feedback_data.length === 0
  )
    return null;

  return (
    <ul className="flex items-center justify-end gap-x-6 text-xs text-[rgba(255,255,255,0.8)]">
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
            href={contacts_data[contact]?.link}
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
  );
};
