import PropTypes from 'prop-types';
import { Input,  Label } from '../ContactForm';

export const Filter = ({ filtredValue, onSearch }) => (
    <Label>
      Find contacts by name
      <Input type="text" value={filtredValue} onChange={onSearch} />
    </Label>
);

Filter.propTypes = {
  filtredValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
