import { useState } from "react";
import { Podcast } from "../types";
import "../stylesheets/Search.css";

interface Props {
  podcasts: Array<Podcast>
}

const Search = ({podcasts}: Props) => {

  const [input, setInput] = useState('')
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value)
  }

  return(
    <div className="searchContainer">
      <span className="totalItems">{podcasts.length}</span>
      <input 
        className="searchInput"
        type="text" 
        name="search"
        onChange={handleChange}
        value={input} 
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
}

export default Search;