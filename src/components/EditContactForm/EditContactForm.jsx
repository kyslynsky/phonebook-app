import PropTypes from 'prop-types';
import { useState } from 'react';
import { Spinner } from 'components/Spinner';
import * as C from 'components/ContactForm/ContactForm.styled';
import * as message from 'features/notify/notify';

export const EditContactForm = ({
  initValues = { name: '', number: '' },
  text,
  onSubmit,
  disable,
}) => {
  const [initName, setInitName] = useState(initValues.name);
  const [initNumber, setInitNumber] = useState(initValues.number);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setInitName(value);
        break;

      case 'number':
        setInitNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitChanges = async e => {
    e.preventDefault();

    try {
      await onSubmit({ name: initName, number: initNumber });
      message.successNotice('Changes saved');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.Form onSubmit={handleSubmitChanges}>
      <C.AddFormLabelIco>
        <C.UserIco />
        <C.AddFormInput
          value={initName}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </C.AddFormLabelIco>
      <C.AddFormLabelIco>
        <C.PhoneIco />
        <C.AddFormInput
          value={initNumber}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </C.AddFormLabelIco>
      <C.AddFormBtn type="submit" disabled={disable}>
        {disable ? <Spinner size={15} /> : text}
      </C.AddFormBtn>
    </C.Form>
  );
};

EditContactForm.propTypes = {
  initValues: PropTypes.object,
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};
