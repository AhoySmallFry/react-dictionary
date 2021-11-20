import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [searchTerm, setsearchTerm] = useState(null);

  function LookUp(event) {
    event.preventDefault();
    alert(`Searching for ${searchTerm}`);
  }

  function handleSearchTermChange(event) {
    setsearchTerm(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={LookUp}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleSearchTermChange}
        />
      </form>
    </div>
  );
}
