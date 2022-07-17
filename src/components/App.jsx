import { Component } from 'react';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section';
import { GlobalStyle } from 'components/GlobalStyles';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container } from 'components/Container';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const ifExist = this.state.contacts.some(
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

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim(' ');

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem('contacts');
    if (storageContacts.length > 0) {
      this.setState({ contacts: JSON.parse(storageContacts) });
    }

    // if (parsedContacts) {
    // this.setState({ contacts: parsedContacts });
    // }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiltredContacts();

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter filtredValue={filter} onSearch={this.changeFilter} />
          <ContactList data={filteredContacts} onDelete={this.deleteContact} />
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
