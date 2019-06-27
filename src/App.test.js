import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should smoke test the App component', () => {
  shallow(<App dispatch={jest.fn}/>)
});
