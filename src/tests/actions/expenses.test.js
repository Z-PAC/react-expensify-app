import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startAddExpense,
  startSetExpenses,
  startRemoveExpense, 
  startEditExpense
} from '../../actions/expenses';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid }}
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = { };
  expenses.forEach(({ id, description, note, createdAt, amount }) => {
    expensesData[id] = { description, note, createdAt, amount };
  });

  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
  const result = removeExpense({ id: '123abc'});
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should remove expense from database and store',(done) => {
  const store = createMockStore({ auth: { uid } });
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('should setup edit expense action object', () => {
  const result = editExpense('123abc', {
    description: 'New description',
    amount: 100,
    note: 'New note'
  });
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'New description',
      amount: 100,
      note: 'New note'
    }
  })
});

test('should edit expense from database and store',(done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const updates = {
    note: 'Extra note',
    amount: 5000
  };
  store.dispatch(startEditExpense(id,updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      const expense = { id, ...snapshot.val() };
      expect(expense).toEqual({
        ...expenses[1],
        ...updates
      });
      done();
    });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
    }
  );
});

test('should add expense to database and store',(done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');

  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store',(done) => {
  const store = createMockStore(defaultAuthState);
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultData);
    done();
  });
});

test('should setup set expense action object with data',() => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch expenses from firebase',(done) => {
  const store = createMockStore(defaultAuthState);

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
