import React, { useState } from "react";
import Boards from "./Boards";
import SearchPane from "./SearchPane";
import "antd/dist/antd.css";
import { Spinner } from "@simply007org/react-spinners";
import { SyncLoader as Spin } from "react-spinners";

function Home() {
  const [raw, setRaw] = useState([]);

  function dataPuller(data) {
    if (data) {
      setRaw(data);
    }
  }

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <center>
          <SearchPane dataPusher={dataPuller} />
          <Spinner name="mySpinner">
            <Spin color="#410d78" />
          </Spinner>
        </center>
      </div>
      <div className="board-container">
        <Boards data={raw || ""} />
      </div>
    </div>
  );
}

export default Home;
