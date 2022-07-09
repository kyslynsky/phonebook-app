import PropTypes from 'prop-types';
import { Input, Form, Label } from '../ContactForm';

export const Filter = ({ filtredValue, onSearch }) => (
  <Form>
    <Label>
      Find contacts by name
      <Input type="text" value={filtredValue} onChange={onSearch} />
    </Label>
  </Form>
);

Filter.propTypes = {
  filtredValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
