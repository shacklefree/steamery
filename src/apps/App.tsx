import React, { useEffect } from "react"
import queryString from "qs"
import { CanduProvider } from "@candulabs/react-sdk"
import { Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

import Ant from "./Ant"

import { styleguides } from "../constants"
import { ReduxState } from "../redux/reducers"
import { initAuth } from "../redux/actions/auth"

interface Props {
  auth: any
  initAuth: any
  styles: any
}

const App = (props: Props) => {
  const { initAuth, auth, styles } = props
  const selectedApp = <Ant />
  const styleguideToRender = styles.styleguide || styleguides[0].id;
  const { styleguide: selectedStyleguide } = styleguides.find(({ id}) => id === styleguideToRender ) || { styleguide: {}}

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
              key={styleguideToRender}
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
              key={styleguideToRender}
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
  auth: state.auth,
  styles: state.styles,
})

export default connect(mapStateToProps, { initAuth })(App)
