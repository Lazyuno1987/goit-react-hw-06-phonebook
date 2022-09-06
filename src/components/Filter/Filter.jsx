import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact, getFilteredContact } from 'redux/contactSlice';

export const Filter = () => {
  const filter = useSelector(getFilteredContact);
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <>
      <Label>
        Find the contact
        <Input type="text" value={filter} onChange={changeFilter} />
      </Label>
    </>
  );
};
