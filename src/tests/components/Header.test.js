// react-test-renderer
// assert stuff that got rendered

import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow'; // only renders given component
import Header from '../../components/Header';

test('should render Header correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();

  const wrapper = shallow(<Header />);
  //expect(wrapper.find('h1').text()).toBe("Expensify");
  expect(wrapper).toMatchSnapshot();
});



