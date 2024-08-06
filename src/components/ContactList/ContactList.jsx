import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
// import {  selectContacts } from '../../redux/contactsSlice';
import {  useSelector } from 'react-redux';

const ContactList = () => {


  const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector(state => state.filters.name);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.username.toLowerCase().includes(filter.toLowerCase())
  // );
 
  return (
    <div className={css.container}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          />
      ))}
    </div>
  )
}

export default ContactList