import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Search(props) {
  console.log(props.defaultSearchTerm);
  let [searchTerm, setsearchTerm] = useState(props.defaultSearchTerm);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function LookUp() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000012b45059f0783470abcc1c68ff4eb2f29";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    LookUp();
  }

  function handleSearchTermChange(event) {
    setsearchTerm(event.target.value);
  }

  function load() {
    setLoaded(true);
    LookUp();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <form onSubmit={handleSubmit}>
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
        <div className="photos">
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
