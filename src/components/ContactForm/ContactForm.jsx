import { useState } from 'react';
import * as S from './ContactForm.styled';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/phonebook/contactsSlice';
import { Spinner } from 'components/Spinner';
import {
  warningNotice,
  successNotice,
  failureNotice,
} from 'features/notify/notify';

export const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
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
        warningNotice(`${name} is already exist`);
        return;
      }

      await addContact({ name, number });
      successNotice(`${name} successfully added`);
      setName('');
      setNumber('');
    } catch (error) {
      failureNotice(error.message);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.AddFormLabelIco>
        <S.UserIco />
        <S.AddFormInput
          placeholder="Name"
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </S.AddFormLabelIco>

      <S.AddFormLabelIco>
        <S.PhoneIco />
        <S.AddFormInput
          placeholder="Number"
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </S.AddFormLabelIco>
      <S.AddFormBtn type="submit" disabled={isAdding}>
        {isAdding ? <Spinner size={15} /> : 'Add contact'}
      </S.AddFormBtn>
    </S.Form>
  );
};
