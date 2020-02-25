import React, { useEffect } from "react"
import queryString from "qs"
import { CanduProvider } from "@candulabs/react-sdk"
import { Route, Switch } from "react-router-dom"
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
    <Switch>
      <Route path="/sdk-test">
        {({ location }) => {
          
          const { clientToken, userId } = queryString.parse(location.search.replace("?", ""))

          return (
            <CanduProvider
              clientToken={clientToken || 'DevbWgE94u'}
              userId={userId || 'test-user'}
              traits={{}}
              styleguide={selectedStyleguide}
            >
              {selectedApp}
            </CanduProvider>
          )
        }}
      </Route>
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
              traits={auth || {}}
              styleguide={selectedStyleguide}
            >
              {selectedApp}
            </CanduProvider>
          )
        }}
      </Route>
    </Switch>
    
  )
}

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { initAuth })(App)
