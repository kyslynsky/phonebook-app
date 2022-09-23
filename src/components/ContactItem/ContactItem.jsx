import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDeleteContactMutation } from 'redux/phonebook/contactsSlice';
import { Spinner } from 'components/Spinner';
import * as S from './ContactItem.styled';
import { infoNotice } from 'features/notify/notify';

export const ContactItem = forwardRef((props, ref) => {
  const { id, name, number } = props;

  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting, isSuccess, isError }] =
    useDeleteContactMutation();

  if (isSuccess) {
    infoNotice(`${name} deleted`);
  }

  return (
    <S.ListItem ref={ref}>
      {isError && (
        <div>Something went wrong, please try again after reload</div>
      )}
      <p>
        <S.ContactName>{name}: </S.ContactName>
        {number}
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
});

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
