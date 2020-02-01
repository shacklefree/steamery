import React from "react"
import { render } from "react-dom"
import { CanduProvider } from "@candulabs/react-sdk"
import { BrowserRouter as Router } from "react-router-dom"

import Ant from "./apps/Ant"
import antStyleguide from "./styles/antStyleguide"

class App extends React.Component {
  render() {
    const selectedApp = <Ant />
    const selectedStyleguide = antStyleguide
    return (
      <Router>
        <CanduProvider
          clientToken="dR8ZTszcnp"
          userId="1"
          styleguide={selectedStyleguide}
        >
          {selectedApp}
        </CanduProvider>
      </Router>
    )
  }
}

render(<App />, document.getElementById("root"))
