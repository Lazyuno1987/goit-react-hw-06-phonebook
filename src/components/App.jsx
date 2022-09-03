import {  useEffect } from 'react';
import { nanoid } from 'nanoid';
import {getContacts, getFilter} from '../redux/selectors'
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {addContact, deleteContact, setFilter } from 'redux/actions';

export default function App() {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()
 
useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  function onSubmitForm({ name, number }) {
   
     const newContact = {
      name,
      number,
      id: nanoid(),
     }
    if (contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase())){
      return alert(`${name} is already in contacts!`)
    }
    return dispatch(addContact(newContact))
   
  }

  const changeFilter = event => {
   dispatch( setFilter(event.currentTarget.value));
   
  };

  const onFiltr = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId))
  };


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitForm} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={onFiltr()}
        onDeleteContact={onDeleteContact}
        id={contacts.id}
      />
    </div>
  );
}
