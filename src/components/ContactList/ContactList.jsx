import PropTypes from 'prop-types';
import { List, ListItem, Button, ContactName } from './ContactList.styled';

export const ContactList = ({ data, onDelete }) => (
  <>
    <List>
      {data.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            <ContactName>{name}: </ContactName>
            {number}
          </p>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
