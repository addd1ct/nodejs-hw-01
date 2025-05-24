import { readContacts } from "../utils/readContacts";

const countContacts = async () => {
  const contacts = await readContacts();
  console.log("Количество контактов:", contacts.length);
};

countContacts();
