import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
// import { playKeyboard, toKeyboardArray } from "./helpers/playKeyboard";

function Board({ data }) {
  // use kb-helper to perform key-binding on props.data.scraped
  const [stat, setStat] = useState({
    pause: { value: false },
    text: [],
    notesArray: [],
    index: 0,
    renderFlag: false,
    playing: true,
    selectSound: { value: 1 },
  });

  // useEffect(() => {
  //   let content = [];
  //   let newStat = { ...stat, text: content };
  //   setStat(newStat);
  // }, [data, stat]);

  // use helper to generate the audio // neon-highlight on play on note card

  return (
    <div id="cards" className="jumbotron">
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Raw Content" bordered={true}>
            <p id="raw">{data}</p>
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
  );
}

export default Board;
