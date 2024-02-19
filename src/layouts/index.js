import * as React from "react";
import "./index.less";
import "./global.less";
import MyFooter from "../components/footer/footer";
import MyHeader from "../components/header/header";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const App = ({ children }) => {
  return (
    <Layout className="app-layout bg-linear">
      <Header
        className="bg-linear layout-header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#FFFAF0",
        }}
      >
        <div className="index-header">
          <MyHeader />
        </div>
      </Header>
      <Content className="index-content">
        <div>{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "black",
          marginTop: "50px",
        }}
      >
        <MyFooter />
      </Footer>
    </Layout>
  );
};
export default App;
