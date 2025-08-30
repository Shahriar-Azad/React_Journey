import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "add") return state + 1;
  if (action.type === "subtract") return state - 1;
  return state;
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "add" })}>+1</button>
      <button onClick={() => dispatch({ type: "subtract" })}>-1</button>
    </>
  );
}
