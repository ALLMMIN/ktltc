import React from "react";
import { Button, Card, Flex, Typography } from "antd";
import l1 from "@assets/01.png";

const cardStyle: React.CSSProperties = {
  width: 620,
};

const imgStyle: React.CSSProperties = {
  display: "block",
  width: 273,
};

const App: React.FC = () => (
  <Card
    // honorable
    style={cardStyle}
    bodyStyle={{ padding: 0, overflow: "hidden" }}
  >
    <Flex justify="space-between">
      <img alt="avatar" src={l1} style={imgStyle} />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{ padding: 32 }}
      >
        <Typography.Title level={3}>
          “antd is an enterprise-class UI design language and React UI library.”
        </Typography.Title>
        <Button type="primary" href="https://ant.design" target="_blank">
          Get Start
        </Button>
      </Flex>
    </Flex>
  </Card>
);

export default App;
