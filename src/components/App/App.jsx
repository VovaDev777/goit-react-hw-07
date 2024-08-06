import ContactForm from "../ContactForm/ContactForm"
import SearchBox from '../SearchBox/SearchBox'
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import css from './App.module.css'
import '../../reset.css'
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div className={css.container}>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <Loader />
      <ContactList />
    </div>
  )
}

export default App