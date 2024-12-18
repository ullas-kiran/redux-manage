import { useDispatch, useSelector } from "react-redux";
interface RootState {
  counter: number;
}
const App = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch=useDispatch();

  const increment = () => {
    dispatch({type:"INCREMENT"})
  };

  const decrement = () => {
    dispatch({type:"DECREMENT"})
  };

  const addValue=()=>{
    dispatch({type:"ADDING",payload:2}) //passing value using payload
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addValue}>Adding</button>
    </div>
  );
};

export default App;
