import * as React from "react"
import queryString from "qs"
import styled from "styled-components"
import { Portal, Tutorial } from "@candulabs/react-sdk"
import { Switch, Route } from "react-router-dom"

import { ExploreDraft } from "./components"

const Container = styled.div`
  max-width: 980px;
  margin: auto;
  padding-top: 56px;
`

const Explore = () => {
  return (
    <Container>
      <Switch>
        <Route path="/draft">
          <ExploreDraft />
        </Route>
        <Route path="/testStyleguide">
          <Tutorial tutorialId={-1}/>
        </Route>
        <Route path="/sdk-test">
          {({ location }) => {
            const portalSlug = queryString.parse(location.search.replace('?', '')).portalSlug

            return <Portal slug={portalSlug || 'datadog-test-portal'} />
          }}
        </Route>
        <Route path="/">
          <Portal slug="explore-center" />
        </Route>
      </Switch>
    </Container>
  )
}

export default Explore
