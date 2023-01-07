import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <header>
        <h2>Count is: {counter}</h2>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button type="button" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
