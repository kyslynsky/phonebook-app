export const Filter = ({ filtredValue, onSearch }) => (
  <>
    <label>
      Find contacts by name
      <input type="text" value={filtredValue} onChange={onSearch} />
    </label>
  </>
);
