import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('Layout Snapshots', () => {
  it('should render our Snapshots correctly', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });
});
