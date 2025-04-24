import { contacts_data } from "constans";

type Current_contacts_type = "address" | "phone" | "email";

const current_contacts: Current_contacts_type[] = ["address", "phone", "email"];

export const isEmptyObj = (object: object): boolean => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }
  return true;
};

export const Contacts = () => {
  if (
    !contacts_data ||
    isEmptyObj(contacts_data) ||
    !current_contacts ||
    current_contacts.length === 0
  )
    return null;

  return (
    <section>
      <div className="container">
        <div>
          <h2>Контакты</h2>
          <ul>
            {current_contacts.map((contact, idx: number) => (
              <li className="mb-3" key={idx}>
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
        </div>
        {/* map */}
      </div>
    </section>
  );
};
