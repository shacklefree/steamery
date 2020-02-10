import React from "react"
import queryString from "qs"
import { render } from "react-dom"
import { CanduProvider } from "@candulabs/react-sdk"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { Ant } from "./apps"
import antStyleguide from "./styles/antStyleguide"

import { initPendo } from "./clients/pendo"

// initialize pendo with fake user
initPendo()

class Steamery extends React.Component {
  render() {
    const selectedApp = <Ant />
    const selectedStyleguide = antStyleguide
    return (
      <Router>
        <Route path="*">
          {props => {
            const { userId = 1 } = queryString.parse(
              props.location.search.replace("?", "")
            )
            return (
              <CanduProvider
                clientToken="dR8ZTszcnp"
                userId={userId}
                styleguide={selectedStyleguide}
              >
                {selectedApp}
              </CanduProvider>
            )
          }}
        </Route>
      </Router>
    )
  }
}

render(<Steamery />, document.getElementById("root"))
