import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query.trim()) {
      alert('Please enter a search term.');
      return;
    }
    onSearch(query.trim());
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products/items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
