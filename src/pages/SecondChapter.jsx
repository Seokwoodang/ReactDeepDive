// import { useState } from "react";
// export default function A() {
//   return (
//     <div className="App">
//       <h1>Hello React!</h1>
//       <B />
//     </div>
//   );
// }
// function B() {
//   const [counter, setCounter] = useState<number>(0);
//   function handleButtonClick() {
//     setCounter((previous) => previous + 1);
//   }
//   return (
//     <>
//       <label>
//         <C number={counter} />
//       </label>
//       <button onClick={handleButtonClick}>+</button>
//     </>
//   );
// }

// import { useEffect, useMemo, useState } from "react";

// function C({ number }: { number: number }) {
//   return (
//     <div>
//       {number} <D />
//     </div>
//   );
// }
// function D() {
//   return <>리액트 재밌다!</>;
// }

// function useMath(number: number) {
//   const [double, setDouble] = useState(0);
//   const [triple, setTriple] = useState(0);
//   useEffect(() => {
//     setDouble(number * 2);
//     setTriple(number * 3);
//   }, [number]);
//   return useMemo(() => ({ double, triple }), [double, triple]);
// }
// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const value = useMath(10);

//   useEffect(() => {
//     console.log(value.double, value.triple);
//   }, [value]); // 값이 실제로 변한 건 없는데 계속해서 console.log가 출력된다.

//   function handleClick() {
//     setCounter((prev) => prev + 1);
//   }
//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={handleClick}>+</button>
//     </>
//   );
// }

// const SecondChapter = () => {
//   const [state, setState] = useState(() => {
//     console.log("복잡한 연산..."); // App 컴포넌트가 처음 구동될 때만 실행되고, 이후 리렌더링 시에는 실행 x
//     return 0;
//   });

//   function handleClick() {
//     setState((prev) => prev + 1);
//   }

//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={handleClick}>+</button>
//     </div>
//   );
// };

// export default SecondChapter;

// import { useState, useEffect } from "react";
// export default function SecondChapter() {
//   const [counter, setCounter] = useState(0);
//   function handleClick() {
//     setCounter((prev) => prev + 1);
//   }
//   useEffect(() => {
//     function addMouseEvent() {
//       console.log(counter);
//     }
//     window.addEventListener("click", addMouseEvent);
//     // 클린업 함수
//     return () => {
//       console.log("클린업 함수 실행!", counter);
//       window.removeEventListener("click", addMouseEvent);
//     };
//   }, [counter]);
//   // 하나의 요소로 구성된 가장 단순한 형태

//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={handleClick}>+</button>

//       <div></div>
//       <div />
//       <></>
//     </>
//   );
// }

// counter.ts
// export type State = { counter: number };
// // 상태를 아예 컴포넌트 밖에 선언했다. 각 컴포넌트가 이 상태를 바라보게 할 것이다.
// let state: State = {
//   counter: 0,
// };
// // getter
// export function get(): State {
//   return state;
// }
// // useState와 동일하게 구현하기 위해 게으른 초기화 함수나 값을 받을 수 있게 했다.
// type Initializer<T> = T extends any ? T | ((prev: T) => T) : never;
// // setter
// export function set<T>(nextState: Initializer<T>) {
//   state = typeof nextState === "function" ? nextState(state) : nextState;
// }
// // Counter
// function Counter() {
//   const state = get();
//   console.log(state);

//   function handleClick() {
//     set((prev: State) => ({ counter: prev.counter + 1 }));
//   }
//   return (
//     <>
//       <h3>{state.counter}</h3>
//       <button onClick={handleClick}>+</button>
//     </>
//   );
// }

// export default Counter;

import React from "react";

const SecondChapter = () => {
  //
  const makeCounter = () => {
    let counter = 0;

    return function () {
      counter = counter + 1;
      return counter;
    };
  };

  function increase(n) {
    return ++n;
  }

  // 보조 함수
  function decrease(n) {
    return --n;
  }

  const increaser = makeCounter();
  console.log(increaser()); // 1
  console.log(increaser()); // 2

  // increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
  const decreaser = makeCounter();
  console.log(decreaser()); // -1
  console.log(increaser()); // 3
  console.log(decreaser()); // -2

  return <div>SecondChapter</div>;
};

export default SecondChapter;
