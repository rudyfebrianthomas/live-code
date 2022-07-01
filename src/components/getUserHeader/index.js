import React from "react";
import { Col, Row, InputNumber, Switch, Button } from "antd";

const GetUserHeader = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{ minHeight: "150px", backgroundColor: "#CBCBC9" }}
    >
      <Col span={6}>
        <InputNumber min={1} max={10} style={{ width: "100%" }} />
      </Col>
      <Col span={2} offset={1}>
        <Switch checkedChildren="Female" />
      </Col>
      <Col span={2}>
        <Button block type="primary" style={{ borderRadius: "8px" }}>
          Get User
        </Button>
      </Col>
    </Row>
  );
};

export default GetUserHeader;
