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
      <br />
      <br />
      <h3 id="home-title">
        <center>Melodify</center>
      </h3>
      <h5>
        <center>
          <em>" Hear Your Sites "</em>
        </center>
      </h5>

      <br />
      <h6>
        <center>
          {"  "}
          Ever wondered what a website content might sound like? Melodify
          scrapes the contents of a website and composes a song based on <br />{" "}
          an entered website URL. Keep an open mind for some website music.{" "}
        </center>
      </h6>
      <center>
        <div id="search" className="input-group">
          <input
            className="shadow-lg form-control form-rounded"
            id="search"
            name="search"
            placeholder=" Enter URL to fetch content"
            onChange={onQueryChange}
            type="text"
            pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
            title="USE FULL URL, example: https://www.scope.io"
            value={query.url}
            required
            autoFocus
          />

          <div className="shadow-lg input-group-append">
            <button
              id="search-btn"
              className="btn btn-outline-dark"
              type="submit"
              onClick={() => {
                submitHandle(query);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default SearchPane;
