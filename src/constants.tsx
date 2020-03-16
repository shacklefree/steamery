import React from 'react';
import antdStyleguide from '@candulabs/react-antd-styleguide';
import bootstrapStyleguide from '@candulabs/react-bootstrap-styleguide';
import evergreenStyleguide from '@candulabs/react-evergreen-styleguide';

export const styleguides = [
  {
    id: 'antd',
    name: 'Ant Design',
    styleguide: antdStyleguide,
    Additional: () => null,
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    styleguide: bootstrapStyleguide,
    Additional: () => (
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
    ),
  },
  {
    id: 'evergreen',
    name: 'Evergreen',
    styleguide: evergreenStyleguide,
    Additional: () => null,
  },
  {
    id: 'default',
    name: 'Candu Default',
    styleguide: {},
    Additional: () => null,
  },
];
