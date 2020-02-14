import * as React from "react"
import { Typography, Card, Button } from "antd"

const { Title } = Typography

// TODO(mat) introduce this interface in sdk
interface Styleguide {
  H3: React.FunctionComponent
  Button: React.FunctionComponent<{ handlers: any[] }>
  Card: React.FunctionComponent
  Flex: React.FunctionComponent<{ style: any }>
  FlexItem: React.FunctionComponent<{ style: any }>
  TabGroup: React.FunctionComponent
  TabGroupHeader: React.FunctionComponent
  TabGroupHeaderItem: React.FunctionComponent<{ active: boolean }>
  Tab: React.FunctionComponent
}

const styleguide: Styleguide = {
  H3: ({ children, ...otherProps }) => (
    <Title level={3} {...otherProps}>
      {children}
    </Title>
  ),
  Button: ({ children, handlers }) => {
    return <Button {...handlers}>{children}</Button>
  },
  Card: ({ children }) => (
    <Card
      style={{
        width: 310,
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
      bodyStyle={{ flex: "1 1" }}
    >
      {children}
    </Card>
  ),
  Flex: ({ children, ...otherProps }) => {
    return <div style={{ display: "flex", flexWrap: "wrap" }}>{children}</div>
  },
  FlexItem: ({ children, style }) => {
    return (
      <div style={{ ...style, flex: "0 0", marginBottom: 16, marginRight: 16 }}>
        {children}
      </div>
    )
  },
  TabGroup: ({ children }) => (
    <div style={{ marginBottom: 16 }}>{children}</div>
  ),
  TabGroupHeader: ({ children }) => (
    <div className="ant-tabs-bar ant-tabs-top-bar">
      <div className="ant-tabs-nav-container">
        <div className="ant-tabs-nav-wrap">
          <div className="ant-tabs-nav-scroll">
            <div className="ant-tabs-nav ant-tabs-nav-animated">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  TabGroupHeaderItem: ({ children, active, ...otherProps }) => {
    return (
      <div
        className={`ant-tabs-tab ${active ? "ant-tabs-tab-active" : ""}`}
        {...otherProps}
      >
        {children}
      </div>
    )
  },
  Tab: ({ children }) => <div>{children}</div>
}

export default styleguide
