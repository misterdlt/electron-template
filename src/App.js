import { UserOutlined, CodeOutlined } from "@ant-design/icons";
import { changeAntdTheme } from "mini-dynamic-antd-theme";
import { useRecoilState, useRecoilValue } from "recoil";

import { themeState, viewState } from "./utility/atoms";
import { Breadcrumb, Layout, Menu, Typography } from "antd";
import { useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Home from "./views/Home";

function App() {
  //
  // Hooks
  const [collapsed, setCollapsed] = useRecoilState(themeState);
  const [theme, setTheme] = useRecoilState(themeState);
  const [view, setView] = useRecoilState(viewState);

  // Ant Design
  const { Header, Content, Footer, Sider } = Layout;
  const { Title } = Typography;

  // Define Items Rendered in Menu Component
  const menuItems = [{ label: "Home", key: "home", icon: <UserOutlined /> }];

  // Define Views
  const viewMap = new Map([["home", <Home />]]);

  // Input Handlers
  const handleThemeChange = (e) => {
    //
    setTheme(e.target.checked ? "dark" : "light");
    changeAntdTheme();
    console.log("Theme set to: ", e.target.checked ? "dark" : "light");
  };

  useEffect(() => {}, []);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <span className="logo-container">
          <CodeOutlined className="logo" />
          <Title level={4}>Starter</Title>
        </span>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          defaultSelectedKeys={["home"]}
        />
        <input type="color" onChange={handleThemeChange} id="color-picker" />
      </Header>
      <Sider
        collapsible
        width={200}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu defaultSelectedKeys={["1"]} items={menuItems} />
      </Sider>
      <Layout className="site-layout">
        <Content>{viewMap.get(view)}</Content>
      </Layout>
    </Layout>
  );
}

export default App;
