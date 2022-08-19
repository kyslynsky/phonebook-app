import PropTypes from 'prop-types';
import * as C from 'components/ContactForm/ContactForm.styled';

export const EditContactForm = props => {
  return (
    <C.Form>
      <C.Label>
        Name
        <C.Input
          // value={name}
          // onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </C.Label>

      <C.Label>
        Number
        <C.Input
          // value={phone}
          // onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </C.Label>
      <C.Button type="submit">
        {/* {isAdding ? <Spinner size={15} /> : 'Add contact'} */}
      </C.Button>
    </C.Form>
  );
};

EditContactForm.propTypes = {};
