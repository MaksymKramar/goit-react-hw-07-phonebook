import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import Section from "./components/Section/Section";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "./redux/contacts/contactsSelectors";
import { fetchContacts } from "./redux/contacts/contactsOperations";

import "./App.css";
import { useEffect } from "react";

function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <Section title="Phonebook">
        <Form />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      )}
    </div>
  );
}

export default App;
