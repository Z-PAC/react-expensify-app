import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

test('should setup login action object', () => {
  const uid = 'abc123';
  const result = login(uid);
  expect(result).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup logout action object', () => {
  const result = logout();
  expect(result).toEqual({
    type: 'LOGOUT'
  });
});