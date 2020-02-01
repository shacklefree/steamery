import * as React from "react";
import styled from "styled-components";
import { Portal } from "@candulabs/react-sdk";
import { Switch, Route } from "react-router-dom";

import { ExploreDraft } from "./components";

const Container = styled.div`
  max-width: 980px;
  margin: auto;
  padding-top: 56px;
`;

const Explore = () => {
  return (
    <Container>
      <Switch>
        <Route path="/draft">
          <ExploreDraft />
        </Route>
        <Route path="/">
          <Portal slug="explore-center" />
        </Route>
      </Switch>
    </Container>
  );
};

export default Explore;
