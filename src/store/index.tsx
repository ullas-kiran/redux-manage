import { createStore } from 'redux';
const initialState = {
  counter: 0,
};


interface Action<T = number> {
    type: 'INCREMENT' | 'DECREMENT' | 'ADDING';
    payload?: T;
  }
  
  type CounterActionTypes = Action<string>;

const reducerFn = (state = initialState, action:CounterActionTypes) => {

    // synchronous fn
    //we should not mutate the original state
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };
      case 'ADDING':
        return { ...state, counter: state.counter+ Number(action.payload) };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducerFn);

export default store;
