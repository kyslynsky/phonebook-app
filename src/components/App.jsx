import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section';
import { GlobalStyle } from 'components/GlobalStyles';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container } from 'components/Container';

const useLocaleStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocaleStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const normalizedName = name.toLowerCase();

    const ifExist = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (ifExist) {
      Notify.failure(`${name} is already exist`, {
        clickToClose: true,
        distance: '20px',
        fontFamily: 'inherit',
      });
      return;
    }

    setContacts([{ id: nanoid(), name, number }, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim(' ');

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter filtredValue={filter} onSearch={changeFilter} />
          <ContactList data={getFiltredContacts()} onDelete={deleteContact} />
        </Section>
      )}

      <GlobalStyle />
    </Container>
  );
};
