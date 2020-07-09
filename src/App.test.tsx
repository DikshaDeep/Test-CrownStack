import React from 'react';
import { shallow } from './config/Enzyme';
import App from './App';
test('renders the component', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
