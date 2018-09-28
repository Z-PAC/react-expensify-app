import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLoginGoogle on button click',() => {
  const startLoginGoogle = jest.fn();
  const wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle} />);
  wrapper.find('button').at(0).simulate('click');
  expect(startLoginGoogle).toHaveBeenCalled();
});

test('should call startLoginFacebook on button click',() => {
  const startLoginFacebook = jest.fn();
  const wrapper = shallow(<LoginPage startLoginFacebook={startLoginFacebook} />);
  wrapper.find('button').at(1).simulate('click');
  expect(startLoginFacebook).toHaveBeenCalled();
});