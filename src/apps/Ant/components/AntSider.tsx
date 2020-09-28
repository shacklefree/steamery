import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Layout, Menu, Icon, Typography } from 'antd';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

import '../styles/sider.css';

import Logo from '../../../components/svg/Logo';
import { ReduxState } from '../../../redux/reducers';
import { logout } from '../../../redux/actions/auth';

const { Title } = Typography;
const { Sider } = Layout;

const Brand = styled.div`
  height: 32px;
  margin: 16px;
  padding-left: 8px;
  display: flex;
  overflow: hidden;
`;

interface OwnProps {
  collapsed: boolean;
}

interface ReduxProps {
  // TODO type auth state
  auth: any;
  logout: () => void;
}

type Props = OwnProps & ReduxProps;

const keyMap = {
  '1': '/',
  '2': '/draft',
  '3': '/test-styleguide',
  '4': '/launch-darkly',
};

const locationToKey = (location) => {
  const activeKey = Object.keys(keyMap).find((key) => keyMap[key] === location.pathname) ?? '';
  return [activeKey];
};

const AntSider = ({ collapsed, auth, logout }: Props) => {
  const handleLogout = () => logout();
  const location = useLocation();
  console.log({ location });
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className="candu-ant-sider">
      <Link to="/">
        <Brand>
          <Logo style={{ fill: '#e0e0e0', flexShrink: 0 }} />
          {!collapsed && (
            <Title level={4} style={{ color: '#e0e0e0', marginLeft: 8, paddingTop: 2 }}>
              Steamery
            </Title>
          )}
        </Brand>
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={locationToKey(location)}
        style={{ flex: '1 1', display: 'flex', flexDirection: 'column' }}
      >
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="laptop" />
            <span>Resource center</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/draft">
            <Icon type="mail" />
            <span>Draft</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/test-styleguide">
            <Icon type="database" />
            <span>Test Styleguide</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/launch-darkly">
            <Icon type="database" />
            <span>Launch Darkly</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="upload" />
          <span>Documents</span>
        </Menu.Item>
        <div style={{ flex: '1 1' }} />
        <Menu.Item key="6">
          <Icon type="bell" />
          <span>Alerts</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="compass" />
          <span>Explore</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>

        <Menu.Item disabled={!auth.uid} onClick={handleLogout}>
          <Icon type="poweroff" />
          <span>Log out</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(AntSider);
