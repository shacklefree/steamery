import React, { useEffect } from 'react';
import queryString from 'qs';
import { CanduProvider } from '@candulabs/react-sdk';
import { connect } from 'react-redux';

import Ant from './Ant';

import { styleguides } from '../constants';
import { ReduxState } from '../redux/reducers';
import { initAuth } from '../redux/actions/auth';

import Routes from './Routes';

interface Props {
  auth: any;
  initAuth: any;
  styles: any;
}

const App = (props: Props) => {
  const { initAuth, styles } = props;
  const styleguideToRender = styles.styleguide || styleguides[0].id;
  const { styleguide: selectedStyleguide } = styleguides.find(
    ({ id }) => id === styleguideToRender,
  ) || { styleguide: {} };

  useEffect(() => {
    initAuth();
  }, []);

  const { clientToken, userId } = queryString.parse(window.location.search.replace('?', ''));

  return (
    <CanduProvider
      key={styleguideToRender}
      clientToken={clientToken || 'dR8ZTszcnp'}
      userId={userId || 'test-user'}
      traits={{}}
      styleguide={selectedStyleguide}
    >
      <Ant>
        <Routes />
      </Ant>
    </CanduProvider>
  );
};

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth,
  styles: state.styles,
});

export default connect(mapStateToProps, { initAuth })(App);
