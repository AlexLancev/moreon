import { contacts_data } from "constans";

import { Container } from "@/components";
import { isEmptyObj } from "@/utils";

import { Map_moreon } from "../map";

type Current_contacts_type = "address" | "phone" | "email";

const current_contacts: Current_contacts_type[] = ["address", "phone", "email"];

export const Contacts = () => {
  if (
    !contacts_data ||
    isEmptyObj(contacts_data) ||
    !current_contacts ||
    current_contacts.length === 0
  )
    return null;

  return (
    <section className="py-12">
      <Container>
        <div className="gap-x-5 md:flex md:items-center md:justify-evenly">
          <ul className="mb-10">
            {current_contacts.map((contact, idx: number) => (
              <li
                className="mb-3 text-xl xl:mb-6 xl:text-2xl 3xl:text-3xl"
                key={idx}
              >
                <span className="mr-2">{contacts_data[contact]?.name}:</span>
                <a
                  href={contacts_data[contact]?.path}
                  target="_blahk"
                  rel="noopener noreferrer"
                >
                  {contacts_data[contact]?.name === "Адрес" ? (
                    <address>
                      <strong>{contacts_data[contact]?.text}</strong>
                    </address>
                  ) : (
                    <strong>{contacts_data[contact]?.text}</strong>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <Map_moreon />
        </div>
      </Container>
    </section>
  );
};
