import fs from "fs/promises";
import { PATH_DB } from "../constants/contacts";

export const readContacts = async () => {
  const content = await fs.readFile(PATH_DB, "utf-8");
  return JSON.parse(content);
};
