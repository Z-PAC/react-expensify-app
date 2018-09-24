import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render a single expense summary correctly',() => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={500} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses summary correctly',() => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={1500} />);
  expect(wrapper).toMatchSnapshot();
});