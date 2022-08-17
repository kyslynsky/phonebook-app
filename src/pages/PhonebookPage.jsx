import { useGetContactsQuery } from 'redux/phonebook/contactsSlice';
import { Container } from 'components/GlobalStyles';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';

const PhonebookPage = () => {
  const { data: contacts, isError, isFetching } = useGetContactsQuery();

  return (
    <Container>
      <ContactForm />
      {isFetching && <div>loading!</div>}
      {contacts && <ContactList contacts={contacts} />}
      {isError && <div>Something went wrong...</div>}
    </Container>
  );
};

export default PhonebookPage;
