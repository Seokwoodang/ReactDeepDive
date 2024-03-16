import { useReducer } from "react";

// useReducer가 사용할 state를 정의
type State = {
  count: number;
};
type Action = { type: "up" | "down" | "reset"; payload?: State };

// 초깃값
const initialState: State = { count: 0 };

// 앞서 선언한 state와 action을 기반으로 state가 어떻게 변경될지 정의
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "up":
      return { count: state.count + 1 };
    case "down":
      return { count: state.count - 1 > 0 ? state.count - 1 : 0 };
    case "reset":
      return init(action.payload || { count: 0 });
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
}
// 무거운 연산이 포함된 게으른 초기화 함수
function init(count: State): State {
  // count: State를 받아서 초깃값을 어떻게 정의할지 연산하면 된다.
  return count;
}

export default function App() {
  const [state, dispatcher] = useReducer(reducer, initialState, init);

  function handleUpButtonClick() {
    dispatcher({ type: "up" });
  }
  function handleDownButtonClick() {
    dispatcher({ type: "down" });
  }
  function handleResetButtonClick() {
    dispatcher({ type: "reset", payload: { count: 1 } });
  }

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={handleUpButtonClick}>+</button>
      <button onClick={handleDownButtonClick}>-</button>
      <button onClick={handleResetButtonClick}>reset</button>
    </div>
  );
}
