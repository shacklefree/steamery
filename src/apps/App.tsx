import React, { useEffect } from "react"
import queryString from "qs"
import { CanduProvider } from "@candulabs/react-sdk"
import { Route } from "react-router-dom"
import { connect } from "react-redux"

import antStyleguide from "./Ant/Styleguide"
import Ant from "./Ant"

import { ReduxState } from "../redux/reducers"
import { initAuth } from "../redux/actions/auth"

interface Props {
  auth: any
  initAuth: any
}

const App = (props: Props) => {
  const { initAuth, auth } = props
  const selectedApp = <Ant />
  const selectedStyleguide = antStyleguide

  useEffect(() => {
    initAuth()
  }, [])

  return (
    <Route path="*">
      {({ location }) => {
        let { uid: userId } = auth
        if (!userId) {
          userId = queryString.parse(location.search.replace("?", "")).userId
        }
        return (
          <CanduProvider
            clientToken="dR8ZTszcnp"
            userId={userId || 1}
            styleguide={selectedStyleguide}
          >
            {selectedApp}
          </CanduProvider>
        )
      }}
    </Route>
  )
}

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { initAuth })(App)
