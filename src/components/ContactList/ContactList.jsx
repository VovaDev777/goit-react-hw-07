import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';

const ContactList = () => {


  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.container}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  )
}

export default ContactList