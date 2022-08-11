import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getContacts, getFilterValue, deleteContact } from 'redux/contacts';
import { List, ListItem, Button, ContactName } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const filteredItems = filterValue
    ? items.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : items;

  const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <List>
      {filteredItems.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            <ContactName>{name}: </ContactName>
            {number}
          </p>
          <Button onClick={() => handleDelete(id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};
