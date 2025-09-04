import { contactsData } from "constans";

import { Container } from "@/components";
import { isEmptyObj } from "@/utils";

import { MapMoreon } from "../map";

const currentContacts = ["address", "phone", "email"] as const;

export const Contacts = () => {
  if (!contactsData || isEmptyObj(contactsData)) return null;

  return (
    <section className="py-12">
      <Container>
        <div className="gap-x-5 md:flex md:items-center md:justify-evenly">
          <ul className="mb-10">
            {currentContacts.map((contact, idx: number) => (
              <li
                className="mb-3 text-xl xl:mb-6 xl:text-2xl 3xl:text-3xl"
                key={idx}
              >
                <span className="mr-2">{contactsData[contact]?.name}:</span>
                <a
                  href={contactsData[contact]?.path}
                  target="_blahk"
                  rel="noopener noreferrer"
                >
                  {contactsData[contact]?.name === "Адрес" ? (
                    <address>
                      <strong>{contactsData[contact]?.text}</strong>
                    </address>
                  ) : (
                    <strong>{contactsData[contact]?.text}</strong>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <MapMoreon />
        </div>
      </Container>
    </section>
  );
};
