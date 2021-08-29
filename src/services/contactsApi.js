import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

// json-server -p 4000 db.json
// json-server --watch db.json

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function dltContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
