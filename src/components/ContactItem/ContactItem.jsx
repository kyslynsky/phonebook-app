import { useDeleteContactMutation } from 'redux/phonebook/contactsSlice';
import { Spinner } from 'components/Spinner';
import * as S from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <S.ListItem key={id}>
      <p>
        <S.ContactName>{name}: </S.ContactName>
        {phone}
      </p>
      <S.Button onClick={() => deleteContact(id)} disabled={isDeleting}>
        Del
        {isDeleting && <Spinner size={14} />}
      </S.Button>
    </S.ListItem>
  );
};
