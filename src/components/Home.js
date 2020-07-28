import React, { useState } from "react";
import Boards from "./Boards";
import SearchPane from "./SearchPane";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { Spinner } from "@simply007org/react-spinners";

function Home() {
  const [data, setData] = useState({ scraped: [] });

  const dataPuller = raw => {
    // we will use the dataFromChild here
    if (raw) {
      const fetchedData = { ...data, scraped: raw };
      setData(fetchedData);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <center>
          <SearchPane dataPuller={dataPuller} />
          <Spinner name="mySpinner">
            <Spin size="large" />
          </Spinner>
        </center>
      </div>
      <Boards data={data.scraped || ""} />
    </div>
  );
}

export default Home;
