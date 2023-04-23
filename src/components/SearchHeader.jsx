import { useState } from "react";

function SearchHeader({search}) {
    const [value, setValue] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        search(value)
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">Press "enter" to search</label>
        <input id="search" className="search__input" value={value} onChange={handleChange} placeholder="Type and search for gifs"/>
      </form>
    </div>
  );
}

export default SearchHeader;
