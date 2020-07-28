import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import { playKeyboard, toKeyboardArray } from "./helpers/playKeyboard";

function Board({ scraped }) {
  // use kb-helper to perform key-binding on props.data.scraped
  // print the generated keys to notes card

  // use helper to generate the audio
  // neon-highlight on play on note card

  if (scraped) {
    playKeyboard(toKeyboardArray([scraped]));
  }

  return (
    <div id="cards" className="jumbotron">
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Raw Content" bordered={true}>
            <p id="raw">{scraped || "waiting..."}</p>
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
