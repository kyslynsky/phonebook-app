import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDeleteContactMutation } from 'redux/phonebook/contactsSlice';
import { Spinner } from 'components/Spinner';
import * as S from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <S.ListItem key={id}>
      <p>
        <S.ContactName>{name}: </S.ContactName>
        {phone}
      </p>
      <S.Button
        onClick={() => navigate(`/phonebook/edit/${id}`)}
        disabled={isDeleting}
      >
        {isDeleting ? <Spinner size={16} /> : 'Edit'}
      </S.Button>
      <S.Button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting ? <Spinner size={16} /> : 'Del'}
      </S.Button>
    </S.ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
