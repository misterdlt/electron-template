import { Space, Table, Typography } from "antd";
import { useRecoilState } from "recoil";
import React from "react";

const Home = () => {
  //
  // Global Hooks

  // Ant Design
  const { Title } = Typography;

  return (
    <Space size="large" direction="vertical" className="full-width">
      <div className="card full-width">
        <Title level={3}>Home</Title>
      </div>
    </Space>
  );
};

export default Home;
