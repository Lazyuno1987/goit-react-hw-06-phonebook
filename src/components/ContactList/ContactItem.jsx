import { ItemContact, Text, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deletedContact } from 'redux/contactSlice';

export const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deletedContact(contactId));
  };

  return (
    <>
      <ItemContact>
        <Text>
          {name}: {number}
        </Text>
        <Button onClick={() => onDeleteContact(id)} type="button">
          Delete
        </Button>
      </ItemContact>
    </>
  );
};
