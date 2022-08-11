import { useSelector } from 'react-redux/es/exports';
import { getContacts } from 'redux/contacts';
import { Section } from 'components/Section';
import { GlobalStyle } from 'components/GlobalStyles';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container } from 'components/Container';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
      <GlobalStyle />
    </Container>
  );
};
