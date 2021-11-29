import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  console.log(props.defaultSearchTerm);
  let [searchTerm, setsearchTerm] = useState(props.defaultSearchTerm);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function LookUp(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchTermChange(event) {
    setsearchTerm(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={LookUp}>
        <input
          type="search"
          placeholder="Find meaning..."
          autoComplete="off"
          onChange={handleSearchTermChange}
        />
      </form>
      <div className="card">
        <Results data={results} />
      </div>
    </div>
  );
}
