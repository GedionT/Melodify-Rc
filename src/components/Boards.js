import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import { playKeyboard, toKeyboardArray } from "./helpers/playKeyboard";

function Board({ data }) {
  // todo: highlight,state for stat

  const [text, setText] = useState("");
  const [keyboard, setKeyboard] = useState([]);
  const [stat, setStat] = useState({
    pause: { value: false },
    index: 0,
    selectSound: { value: 1 },
    renderFlag: false
  });

  useEffect(() => {
    if (typeof data !== "string") {
      let txt = data.map(tuple => tuple[0]).join(" ");
      setText(txt);
      setKeyboard(toKeyboardArray(data));
    }
  }, [data]);

  useEffect(() => {
    if (keyboard.length > 0)
      playKeyboard(keyboard, stat.pause, stat.index, stat.selectSound);
  }, [keyboard, stat]);

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
          {"             |            "}
          <button
            id="btn-play"
            onClick={() => {
              if (stat.pause.value === false) {
                let newStat = { ...stat, pause: { value: true } };
                return setStat(newStat);
              } else if (stat.pause.value === true) {
                let newStat = { ...stat, pause: { value: false } };
                return setStat(newStat);
              } else return;
            }}
          >
            <span role="img" aria-label="mute">
              🔈
            </span>
          </button>
        </center>
      </div>
      <div id="cards" className="jumbotron">
        <Row gutter={5}>
          <Col span={12}>
            <Card title="Raw Content" bordered={true}>
              <p id="raw">{text || "waiting..."}</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Music Notes" bordered={true}>
              <p id="neon">
                {keyboard.map(tuples => tuples[0]).join(" | ") || "waiting..."}
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Board;
