import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./apps"

import { initPendo } from "./clients/pendo"
import configureStore from "./redux"

// initialize pendo with fake user
initPendo()

//init redux
const reduxStore = configureStore()

const Steamery = () => (
  <Provider store={reduxStore}>
    <Router>
      <App />
    </Router>
  </Provider>
)

render(<Steamery />, document.getElementById("root"))
