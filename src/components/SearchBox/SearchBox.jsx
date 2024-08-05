import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css'

const SearchBox = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleSearchChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>Find contacts by name</label>
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={handleSearchChange}
      />
    </form>
  )
}

export default SearchBox