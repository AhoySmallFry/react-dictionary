import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [searchTerm, setsearchTerm] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
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
          autoFocus={true}
          onChange={handleSearchTermChange}
        />
      </form>
      <div className="card">
        <Results data={results} />
      </div>
    </div>
  );
}
