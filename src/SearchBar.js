import React, { useState } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Search:</label>
      <input type="text" id="search-input" name="search" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;