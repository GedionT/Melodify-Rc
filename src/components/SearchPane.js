import React, { useState } from "react";
import getData from "../searchService";

function SearchPane({ dataPuller }) {
  // state for url query input
  const [query, setQuery] = useState({
    url: ""
  });

  // handles onChange in input bar using setQuery
  function onQueryChange(event) {
    const newQuery = { ...query, url: event.target.value };
    setQuery(newQuery);
  }

  // state for pulled data from searchPane
  const [data, setData] = useState([]);

  // send the data through the prop callback to parent

  // on submit button, make sure it's found and used
  async function submitHandle(query) {
    if (query !== null) {
      await setData(getData(query));
      dataPuller(data);
    }
  }

  return (
    <div>
      <br />
      <br />
      <h1 id="home-title">
        <center>Melodify</center>
      </h1>
      <h5>
        <center>" Hear Your Sites "</center>
      </h5>
      <br />

      <h6>
        <center>
          {" "}
          Ever wondered what a website content might sound like? Melodify
          scrapes the contents of a website and composes a song based on <br />{" "}
          an entered website URL. Keep an open mind for some website music.{" "}
        </center>
      </h6>

      <div id="search" className="w-55 input-group mb-2 ">
        <input
          className="shadow-sm form-control form-rounded"
          id="search"
          name="search"
          placeholder="Enter a URL to scrape content"
          onChange={onQueryChange}
          type="text"
          value={query.url}
        />

        <div className="shadow-sm input-group-append">
          <button
            id="search-btn"
            className="btn btn-outline-dark"
            type="button"
            onClick={() => {
              submitHandle(query);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="selection-container">
        <center>
          <select
            className="shadow custome-select"
            name="instrument-select"
            id="btn-menu"
          >
            <option defaultValue>Instrument Flavor</option>
            <option value="0">Piano</option>
            <option value="1">Organ</option>
            <option value="2">Acoustic</option>
            <option value="3">Edm</option>
          </select>
        </center>
      </div>
    </div>
  );
}

export default SearchPane;
