import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, setFilter } from 'redux/contacts';
import { FilterWrapper } from './Filter.styled';
import { Input, Label } from '../ContactForm';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleChangeInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filterValue}
          onChange={handleChangeInput}
        />
      </Label>
    </FilterWrapper>
  );
};
