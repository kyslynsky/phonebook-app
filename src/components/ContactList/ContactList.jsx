import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
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
