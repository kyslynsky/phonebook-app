// import { useSelector, useDispatch } from 'react-redux/es/exports';
// import { getContacts, getFilterValue, deleteContact } from 'redux/contacts';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  //   const dispatch = useDispatch();
  //   const items = useSelector(getContacts);
  //   const filterValue = useSelector(getFilterValue);
  //   const filteredItems = filterValue
  //     ? items.filter(({ name }) =>
  //         name.toLowerCase().includes(filterValue.toLowerCase().trim())
  //       )
  //     : items;

  //   const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <List>
      {contacts?.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
