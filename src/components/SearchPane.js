import React, { useState } from "react";
import getData from "../searchService";

function SearchPane({ dataPusher }) {
  // state for url query input
  const [query, setQuery] = useState({
    url: ""
  });

  // handles onChange in input bar using setQuery
  function onQueryChange(event) {
    const newQuery = { ...query, url: event.target.value };
    setQuery(newQuery);
  }

  // on submit button, make sure it's found and used
  async function submitHandle(query) {
    const data = await getData(query);
    dataPusher(data);
  }

  return (
    <div id="content-main">
      <br />
      <h1 id="home-title">
        <center>Melodify</center>
      </h1>
      <h5>
        <center>" Hear Your Sites "</center>
      </h5>
      <h6>
        <center>
          {"  "}
          Ever wondered what a website content might sound like? Melodify
          scrapes the contents of a website and composes a song based on <br />{" "}
          an entered website URL. Keep an open mind for some website music.{" "}
        </center>
      </h6>

      <div id="search" className="w-50 input-group">
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
    </div>
  );
}

export default SearchPane;
