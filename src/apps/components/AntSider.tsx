import * as React from "react";
import styled from "styled-components";
import { Layout, Menu, Icon, Typography } from "antd";
import "./sider.css";

import Logo from "../../components/svg/Logo";

const { Title } = Typography;
const { Sider } = Layout;
const { SubMenu } = Menu;

const Brand = styled.div`
  height: 32px;
  margin: 16px;
  padding-left: 8px;
  display: flex;
  overflow: hidden;
`;

const AntSider = ({ collapsed }: any) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="candu-ant-sider"
    >
      <Brand>
        <Logo style={{ fill: "#e0e0e0", flexShrink: 0 }} />
        {!collapsed && (
          <Title
            level={4}
            style={{ color: "#e0e0e0", marginLeft: 8, paddingTop: 2 }}
          >
            Steamery
          </Title>
        )}
      </Brand>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ flex: "1 1", display: "flex", flexDirection: "column" }}
      >
        <Menu.Item key="1">
          <Icon type="mail" />
          <span>Mails</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="database" />
          <span>Storage</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>Customers</span>
            </span>
          }
        >
          <Menu.Item key="3">Invoices</Menu.Item>
          <Menu.Item key="4">Help desk</Menu.Item>
          <Menu.Item key="5">Analytics</Menu.Item>
        </SubMenu>
        <Menu.Item key="6">
          <Icon type="upload" />
          <span>Documents</span>
        </Menu.Item>
        <div style={{ flex: "1 1" }} />
        <Menu.Item key="7">
          <Icon type="bell" />
          <span>Alerts</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="compass" />
          <span>Explore</span>
        </Menu.Item>
        <Menu.Item key="9">
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>
        <Menu.Item key="10">
          <Icon type="poweroff" />
          <span>Log out</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AntSider;
