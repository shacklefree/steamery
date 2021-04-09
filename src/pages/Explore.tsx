import * as React from 'react';
import queryString from 'qs';
import styled from 'styled-components';
import { Portal, Tutorial } from '@candulabs/react-sdk';
import { Switch, Route } from 'react-router-dom';
import { Portal as HarbourPortal, Tutorial as HarbourTutorial } from '@candulabs/harbour'

import { ExploreDraft } from './components';

const Container = styled.div`
  max-width: 980px;
  margin: auto;
  padding-top: 56px;
`;

const Explore = () => {
  console.log('EXPLORE!')
  return (
    <Container>
      <Switch>
        <Route path="/draft">
          <ExploreDraft />
        </Route>
        <Route path="/test-styleguide">
          <p>Harbour</p>
          <HarbourTutorial slug="all-nodes" />
          <p>React</p>
          <Tutorial slug="all-nodes" />
        </Route>
        <Route path="/launch-darkly">
          <Portal slug="launch-darkly" />
        </Route>
        <Route path="/sdk-test">
          {({ location }) => {
            const portalSlug = queryString.parse(location.search.replace('?', '')).portalSlug;

            return <Portal slug={(portalSlug as string) || 'datadog-test-portal'} />;
          }}
        </Route>
        <Route path="/">
          <p>Harbour</p>
          <HarbourPortal slug="explore-center" />
          <p>React</p>
          <Portal slug="explore-center" />
        </Route>
      </Switch>
    </Container>
  );
}

export default Explore;
