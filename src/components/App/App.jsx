import ContactForm from "../ContactForm/ContactForm"
import SearchBox from '../SearchBox/SearchBox'
import ContactList from "../ContactList/ContactList";
import css from './App.module.css'
import '../../reset.css'
import { useEffect } from "react";


const App = () => {

  useEffect(() => {
    
  }, [])

  return (
    <div className={css.container}>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App