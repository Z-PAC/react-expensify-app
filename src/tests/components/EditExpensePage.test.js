import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, editExpense, removeExpense, expense;

beforeEach(() => {
  expense = expenses[0];
  history = { push: jest.fn() };
  editExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage 
      expense={expense}
      history={history}
      editExpense={editExpense}
      removeExpense={removeExpense}
    />
  );
});

test('should render EditExpensePage correctly',() => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',() => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle removeExpense',() => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});