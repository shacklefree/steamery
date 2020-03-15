import evergreenStyleguide from '@candulabs/react-evergreen-styleguide';
import antStyleguide from './apps/Ant/Styleguide';

export const styleguides = [
  {
    id: 'antd',
    name: 'Ant Design',
    styleguide: antStyleguide,
  },
  {
    id: 'evergreen',
    name: 'Evergreen',
    styleguide: evergreenStyleguide,
  },
  {
    id: 'default',
    name: 'Candu Default',
    styleguide: {},
  },
];
