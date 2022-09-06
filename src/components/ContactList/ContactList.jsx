import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { nanoid } from 'nanoid';
import { getContacts, getFilteredContact } from 'redux/contactSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContact);

  const onFiltr = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {onFiltr().map(({ name, number, id }) => {
        return (
          <ContactItem key={nanoid()} name={name} number={number} id={id} />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
