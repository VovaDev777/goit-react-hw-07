import css from './Contact.module.css'
import { AiOutlineUser, AiFillPhone } from "react-icons/ai";
import 'normalize.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {

const dispatch = useDispatch();
const handleDelete = (id) => {
  dispatch(deleteContact(id));
};

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.listItem}>
          <AiOutlineUser className={css.svgIcon} />
          <p className={css.text}>{contact.username}</p>
        </li>
        <li className={css.listItem}>
          <AiFillPhone className={css.svgIcon} />
          <p className={css.text}>{contact.number}</p>
        </li>
      </ul>
      <button type='submit' onClick={() => handleDelete(contact.id)} className={css.btn}>Delete</button>
    </div>
  )
}

export default Contact