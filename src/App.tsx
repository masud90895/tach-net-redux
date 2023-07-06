import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/features/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="text-center">
      <h1>Tech net</h1>
      {/* create stylish counter increment and decrement button with tailwind */}
      <div>
        {/* increment */}
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 rounded-lg border hover:bg-green-600 hover:text-white"
        >
          +
        </button>
        {/* counter */}
        <span className="px-4 py-2 rounded-lg border ">{count}</span>

        {/* decrement */}
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 rounded-lg border hover:bg-red-600 hover:text-white "
        >
          -
        </button>

        {/* reset */}
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 rounded-lg border hover:bg-blue-600 hover:text-white "
        >
          reset
        </button>
        {/* increment by value */}
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 rounded-lg border hover:bg-purple-600 hover:text-white"
        >
          increment By Amount
        </button>
      </div>
    </div>
  );
}

export default App;
