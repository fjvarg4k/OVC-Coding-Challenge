import React from 'react';
import Table from './table';
import { shallow } from 'enzyme';
import store from './store';

it('should render without crashing', () => {
  shallow(<Table store={store} />);
});
