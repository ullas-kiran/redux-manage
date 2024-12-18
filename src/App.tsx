// import { useDispatch, useSelector } from "react-redux";
// interface RootState {
//   counter: number;
// }
// const App = () => {
//   const counter = useSelector((state: RootState) => state.counter);
//   const dispatch=useDispatch();

//   const increment = () => {
//     dispatch({type:"INCREMENT"})
//   };

//   const decrement = () => {
//     dispatch({type:"DECREMENT"})
//   };

//   const addValue=()=>{
//     dispatch({type:"ADDING",payload:10}) //passing value using payload
//   }

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h2>{counter}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={addValue}>Add By 10</button>
//     </div>
//   );
// };

// export default App;

// above old way setup of redux

import { useSelector, useDispatch } from "react-redux";
import { actions,RootState } from "./store";

const App = () => {
  const counter = useSelector((state: RootState) => state.counter.counter); // Access nested counter value
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment()); // No arguments needed
  };

  const decrement = () => {
    dispatch(actions.decrement()); // No arguments needed
  };

  const addValue = () => {
    dispatch(actions.addBy(10)); // Pass payload
  };

  return (
    <div>
      <h1>Counter App With ToolKit</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addValue}>Add By 10</button>
    </div>
  );
};

export default App;

