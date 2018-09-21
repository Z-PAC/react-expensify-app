import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducers are pure functions: output only depends on input
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {

  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count+action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count-action.decrementBy
      };
    
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }

};

const store = createStore(countReducer);

// adds listener to state change
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Declare action to increment counter
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// Declare action to decrement counter
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));
