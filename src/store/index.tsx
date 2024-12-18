import { createStore } from 'redux';
const initialState = {
  counter: 0,
};


interface IncrementAction {
    type: string;
  }
  
  interface DecrementAction {
    type: string;
  }
  
  
  type CounterActionTypes = IncrementAction | DecrementAction;

const reducerFn = (state = initialState, action:CounterActionTypes) => {

    // synchronous fn
    //we should not mutate the original state
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducerFn);

export default store;
