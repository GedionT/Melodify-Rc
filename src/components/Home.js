import React, { useState } from "react";
import Boards from "./Boards";
import SearchPane from "./SearchPane";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { Spinner } from "@simply007org/react-spinners";

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
            <Spin size="large" />
          </Spinner>
        </center>
      </div>
      <Boards data={raw || ""} />
    </div>
  );
}

export default Home;
