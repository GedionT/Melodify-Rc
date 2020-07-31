import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
// import { playKeyboard, toKeyboardArray } from "./helpers/playKeyboard";

function Board({ data }) {
  // use kb-helper to perform key-binding on props.data.scraped
  // const [stat, setStat] = useState({
  //   pause: { value: false },
  //   notesArray: [],
  //   index: 0,
  //   renderFlag: false,
  //   playing: true,
  //   selectSound: { value: 1 },
  // });
  const [text, setText] = useState("");
  // const [notes, setNotes] = useState("");

  useEffect(() => {
    if (typeof data !== "string") {
      let txt = data.map(tuple => tuple[0]).join(" ");
      setText(txt);
    }
  }, [data]);

  // use helper to generate the audio // neon-highlight on play on note card

  return (
    <>
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
      <div id="cards" className="jumbotron">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Raw Content" bordered={true}>
              <p id="raw">{text}</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Music Notes" bordered={true}>
              <p id="neon" name="notes">
                dev mode
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Board;
