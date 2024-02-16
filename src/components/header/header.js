import * as React from "react";
import "./header.less";
import { Menu, Flex } from "antd";
import {
  AppstoreAddOutlined,
  FileDoneOutlined,
  FolderOpenOutlined,
  ContactsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Link } from "gatsby";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Resume", "1", <FileDoneOutlined style={{ fontSize: "1.3em" }} />),
  getItem(
    "Projects ↓",
    "sub1",
    <AppstoreAddOutlined style={{ fontSize: "1.3em" }} />,
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
    "Articles ↓",
    "sub2",
    <FolderOpenOutlined style={{ fontSize: "1.3em" }} />,
    [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
    ]
  ),
  getItem(
    <Link to="/">Contact</Link>,
    "link",
    <ContactsOutlined style={{ fontSize: "1.3em" }} />
  ),
];

const MyHeader = () => {
  return (
    <Flex justify="space-between" align="center" className="header">
      <div className="header-logo">
        <img alt="logo" src={`headlogo.png`} className="header-logo" />
      </div>
      <Menu
        mode="horizontal"
        className="header-menu"
        selectable={false}
        items={items}
        overflowedIndicator={
          <UnorderedListOutlined
            style={{ fontSize: "1.5em", color: "#1677ff" }}
          />
        }
        triggerSubMenuAction={"hover"}
      />
    </Flex>
  );
};
export default MyHeader;
