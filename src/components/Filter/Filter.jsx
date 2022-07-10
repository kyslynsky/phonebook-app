import PropTypes from 'prop-types';
import { FilterWrapper } from './Filter.styled';
import { Input, Label } from '../ContactForm';

export const Filter = ({ filtredValue, onSearch }) => (
  <FilterWrapper>
    <Label>
      Find contacts by name
      <Input type="text" value={filtredValue} onChange={onSearch} />
    </Label>
  </FilterWrapper>
);

Filter.propTypes = {
  filtredValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
