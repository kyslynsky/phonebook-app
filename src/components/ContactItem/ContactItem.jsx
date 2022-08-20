import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDeleteContactMutation } from 'redux/phonebook/contactsSlice';
import { Spinner } from 'components/Spinner';
import * as S from './ContactItem.styled';
import { Notify } from 'notiflix';

export const ContactItem = ({ id, name, phone }) => {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting, isSuccess, isError }] =
    useDeleteContactMutation();

  if (isSuccess) {
    Notify.info(`${name} deleted`, {
      clickToClose: true,
      distance: '20px',
      fontFamily: 'inherit',
    });
  }

  return (
    <S.ListItem key={id}>
      {isError && (
        <div>Something went wrong, please try again after reload</div>
      )}
      <p>
        <S.ContactName>{name}: </S.ContactName>
        {phone}
      </p>
      <S.ContactBtnsBox>
        <S.ContactBtn
          onClick={() => navigate(`/phonebook/edit/${id}`)}
          disabled={isDeleting}
        >
          {isDeleting ? <Spinner size={16} /> : <S.EditIco />}
        </S.ContactBtn>
        <S.ContactBtn onClick={() => deleteContact(id)} disabled={isDeleting}>
          {isDeleting ? <Spinner size={16} /> : <S.DeleteIco />}
        </S.ContactBtn>
      </S.ContactBtnsBox>
    </S.ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
