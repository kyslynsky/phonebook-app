import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/phonebook/filterContactsSlice';
import * as S from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.value);

  const handleChangeInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <S.FilterWrapper>
      <S.FilterLabel>
        <S.FilterIco />
        <S.FilteInput
          placeholder="Find contacts by name"
          type="text"
          value={filterValue}
          onChange={handleChangeInput}
        />
      </S.FilterLabel>
    </S.FilterWrapper>
  );
};
