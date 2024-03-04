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

import { useEffect, useMemo, useState } from "react";

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

function useMath(number: number) {
  const [double, setDouble] = useState(0);
  const [triple, setTriple] = useState(0);
  useEffect(() => {
    setDouble(number * 2);
    setTriple(number * 3);
  }, [number]);
  return useMemo(() => ({ double, triple }), [double, triple]);
}
export default function App() {
  const [counter, setCounter] = useState(0);
  const value = useMath(10);

  useEffect(() => {
    console.log(value.double, value.triple);
  }, [value]); // 값이 실제로 변한 건 없는데 계속해서 console.log가 출력된다.

  function handleClick() {
    setCounter((prev) => prev + 1);
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
}
