import * as React from "react"
import "antd/dist/antd.css"
import "./styles/index.css"
import { Layout } from "antd"

import AntHeader from "./components/AntHeader"
import AntSider from "./components/AntSider"

import Explore from "../../pages/Explore"

const { Content, Footer } = Layout

class Ant extends React.Component {
  state = {
    collapsed: false
  }
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <AntSider collapsed={this.state.collapsed} />
        <Layout>
          <AntHeader
            collapsed={this.state.collapsed}
            setCollapsed={(value: any) => this.setState({ collapsed: value })}
          />
          <div>
            <Content
              style={{
                padding: "24px"
              }}
            >
              <Explore />
            </Content>
            <Footer style={{ textAlign: "center" }}>Candu ©2020</Footer>
          </div>
        </Layout>
      </Layout>
    )
  }
}

export default Ant
