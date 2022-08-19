import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/phonebook/filterContactsSlice';
import { FilterWrapper } from './Filter.styled';
import { Input, Label } from '../ContactForm';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.value);

  const handleChangeInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrapper>
      <Label>
        Find contacts by name
        <Input type="text" value={filterValue} onChange={handleChangeInput} />
      </Label>
    </FilterWrapper>
  );
};
