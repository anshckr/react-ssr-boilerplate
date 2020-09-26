import React from 'react';
import { shallow } from 'enzyme';

import App from './';

test('should render Layout', () => {
  const wrapper = shallow(<App />);
  const layout = wrapper.find('Layout');
  expect(layout.exists()).toBe(true);
});
