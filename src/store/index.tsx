// import { createStore } from 'redux';
// const initialState = {
//   counter: 0,
// };


// interface Action<T = number> {
//     type: 'INCREMENT' | 'DECREMENT' | 'ADDING';
//     payload?: T;
//   }
  
//   type CounterActionTypes = Action<string>;

// const reducerFn = (state = initialState, action:CounterActionTypes) => {

//     // synchronous fn
//     //we should not mutate the original state
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, counter: state.counter + 1 };
//     case 'DECREMENT':
//       return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };
//       case 'ADDING':
//         return { ...state, counter: state.counter+ Number(action.payload) };
//     default:
//       return state;
//   }
// };

// // Create the Redux store
// const store = createStore(reducerFn);

// export default store;

// above commented the old way doing reudx which require more boilerplatecodes to much complicated while configurinh
// below new way of redux standard way
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++; // No action parameter needed
    },
    decrement(state) {
      state.counter--; // No action parameter needed
    },
    addBy(state, action: PayloadAction<number>) {
      state.counter += action.payload; // Handle payload
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // Add slice under `counter` key
  },
});

// Type definitions for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

