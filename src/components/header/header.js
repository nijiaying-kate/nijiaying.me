import * as React from "react";
import "./header.less";
import { Menu, Flex, ConfigProvider } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function getItem(label, key, icon, children) {
  return {
    key,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link to="/resume" className="decoration-none">
      <span className="menu-titles ant-menu-title-content">Resume</span>
    </Link>,
    "1",
    ""
  ),
  getItem(
    <span className="menu-titles ant-menu-title-content">Projects </span>,
    "sub1",
    "",
    [
      getItem("Option 3", "3"),
      getItem("Option 4", "4"),
      getItem("Submenu", "sub1-2", null, [
        getItem("Option 5", "5"),
        getItem("Option 6", "6"),
      ]),
    ]
  ),
  getItem(
    <span className="menu-titles ant-menu-title-content">Articles </span>,
    "sub2",
    "",
    [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
    ]
  ),
  getItem(
    <Link to="/" className="decoration-none">
      <span className="menu-titles ant-menu-title-content">Contact</span>
    </Link>,
    "link",
    ""
  ),
];

const MyHeader = () => {
  return (
    <Flex justify="space-between" align="center" className="header">
      <div className="header-logo">
        <Link to="/">
          <StaticImage
            alt="logo"
            src="../../images/headlogo4.png"
            className="header-logo"
          />
        </Link>
      </div>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              horizontalItemSelectedColor: "#D9AEB0",
            },
          },
        }}
      >
        <Menu
          mode="horizontal"
          className="header-menu"
          selectable={false}
          items={items}
          overflowedIndicator={
            <UnorderedListOutlined
              style={{ fontSize: "1.5em", color: "#D9AEB0" }}
            />
          }
          triggerSubMenuAction={"hover"}
        />
      </ConfigProvider>
    </Flex>
  );
};
export default MyHeader;
