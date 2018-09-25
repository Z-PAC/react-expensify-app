import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, startEditExpense, startRemoveExpense, expense;

beforeEach(() => {
  expense = expenses[0];
  history = { push: jest.fn() };
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage 
      expense={expense}
      history={history}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
    />
  );
});

test('should render EditExpensePage correctly',() => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',() => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle removeExpense',() => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
});