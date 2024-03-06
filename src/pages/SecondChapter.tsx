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

import { useState, useEffect } from "react";
export default function SecondChapter() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter((prev) => prev + 1);
  }
  useEffect(() => {
    function addMouseEvent() {
      console.log(counter);
    }
    window.addEventListener("click", addMouseEvent);
    // 클린업 함수
    return () => {
      console.log("클린업 함수 실행!", counter);
      window.removeEventListener("click", addMouseEvent);
    };
  }, [counter]);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
}
