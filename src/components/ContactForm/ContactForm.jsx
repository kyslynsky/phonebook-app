import { useState } from 'react';
import { Notify } from 'notiflix';
import * as S from './ContactForm.styled';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/phonebook/contactsSlice';
import { Spinner } from 'components/Spinner';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (
        contacts?.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        Notify.warning(`${name} is already exist`, {
          clickToClose: true,
          distance: '20px',
          fontFamily: 'inherit',
        });
      }

      await addContact({ name, phone });
      Notify.success(`${name} successfully added`, {
        clickToClose: true,
        distance: '20px',
        fontFamily: 'inherit',
      });
      setName('');
      setPhone('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        Name
        <S.Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </S.Label>

      <S.Label>
        Number
        <S.Input
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </S.Label>
      <S.Button type="submit" disabled={isAdding}>
        {isAdding ? <Spinner size={15} /> : 'Add contact'}
      </S.Button>
    </S.Form>
  );
};
