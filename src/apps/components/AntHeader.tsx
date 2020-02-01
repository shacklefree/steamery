import * as React from "react";
import styled from "styled-components";
import { Layout, Icon, Menu, Dropdown, Button, Input, Typography } from "antd";

const { Header } = Layout;
const { Search } = Input;
const { Title } = Typography;

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AntHeader = ({ collapsed, setCollapsed }: any) => {
  const handleMenuClick = (e: any) => {
    console.log("click", e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Ant Design</Menu.Item>
      <Menu.Item key="2">Evergreen</Menu.Item>
      <Menu.Item key="3">Argon</Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ background: "#fff", padding: 16 }}>
      <HeaderFlex>
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          style={{ padding: 8, marginRight: 12 }}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Title
          level={4}
          style={{
            margin: 0,
            color: "rgba(82, 82, 82, 0.85)",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}
        >
          Explore Steamery
        </Title>
        <div style={{ flex: "1 1" }} />
        <Search placeholder="Quick search" style={{ width: 300 }} />
        <Dropdown overlay={menu}>
          <Button style={{ marginLeft: 16 }}>
            Ant Design <Icon type="down" />
          </Button>
        </Dropdown>
      </HeaderFlex>
    </Header>
  );
};

export default AntHeader;
