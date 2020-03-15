import React, { useState } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import OutsideClickHandler from "react-outside-click-handler"
import { Layout, Icon, Menu, Dropdown, Button, Input, Typography } from "antd"

import { styleguides } from "../../../constants"
import Actions from "../../../redux/actions"
import { ReduxState } from "../../../redux/reducers"

import AntAccount from "./AntAccount"
import AntLogin from "./AntLogin"

const { Header } = Layout
const { Search } = Input
const { Title } = Typography

const HeaderFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  margin-left: 16px;
`

const LoginMenuPositioner = styled.div`
  position: absolute;
  z-index: 1;
  transition: display;
  right: 0;
  top: 40px;
`

interface OwnProps {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

interface ReduxProps {
  // TODO type auth state
  auth: any
  styles: any
  setStyleguide: (s: string) => null
}

type Props = OwnProps & ReduxProps

const AntHeader = ({ collapsed, setCollapsed, styles, setStyleguide, auth }: Props) => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const handleMenuClick = (e: any) => {
    setStyleguide(e.key)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      {styleguides.map(({ id, name }) => (
        <Menu.Item key={id}>{name}</Menu.Item>
      ))}
    </Menu>
  )
  const styleguideId = styles.styleguide || styleguides[0].id;
  const selectedStyleguide = styleguides.find(({ id }) => id === styleguideId) || { name: 'antd'}

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
            {selectedStyleguide.name} <Icon type="down" />
          </Button>
        </Dropdown>
        <AvatarWrapper>
          {auth.photoURL ? (
            <Button
              style={{ overflow: "hidden", padding: 0 }}
              onClick={() => setMenuVisible(!isMenuVisible)}
            >
              <img alt="avatar" style={{ width: 32 }} src={auth.photoURL} />
            </Button>
          ) : (
            <Button
              icon="user"
              onClick={() => setMenuVisible(!isMenuVisible)}
            />
          )}
          {isMenuVisible && (
            <LoginMenuPositioner>
              <OutsideClickHandler onOutsideClick={() => setMenuVisible(false)}>
                {auth.uid ? (
                  <AntAccount onClose={() => setMenuVisible(false)} />
                ) : (
                  <AntLogin onClose={() => setMenuVisible(false)} />
                )}
              </OutsideClickHandler>
            </LoginMenuPositioner>
          )}
        </AvatarWrapper>
      </HeaderFlex>
    </Header>
  )
}

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth,
  styles: state.styles,
})

const mapDispatchToProps = (dispatch: any) => ({
  setStyleguide: (styleguide: string) => dispatch(Actions.Styles.setStyleguide(styleguide)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AntHeader)
