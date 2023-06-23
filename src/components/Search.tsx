import { setFilter } from "../store/features/filterSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Podcast } from "../types";
import i18n from "../i18n/index";
import "../stylesheets/Search.css";

interface Props {
  podcasts: Array<Podcast>
}

const Search = ({podcasts}: Props) => {

  const { filterText } = useAppSelector(state => state.podcastFilter)
  const dispatch = useAppDispatch()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(evt.target.value))
  }

  return(
    <div className="searchContainer">
      <span className="totalItems">{podcasts.length}</span>
      <input 
        className="searchInput"
        type="text" 
        name="search"
        onChange={handleChange}
        value={filterText} 
        placeholder={i18n.HOME.SEARCH_PLACEHOLDER} 
        aria-label="Search"
        autoComplete="off"
      />
    </div>
  );
}

export default Search;