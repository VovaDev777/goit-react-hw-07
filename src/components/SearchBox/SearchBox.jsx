
import css from './SearchBox.module.css'

const SearchBox = () => {

  

  return (
    <form className={css.form}>
      <label className={css.label}>Find contacts by name</label>
      <input
        type="text"
        className={css.input}
        // value={filter}
        // onChange={handleSearchChange}
      />
    </form>
  )
}

export default SearchBox