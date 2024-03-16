// const 이진수_2 = 0b10;

// console.log(이진수_2 == (2).toString(10));
// console.log(0b10);
// console.log((2).toString(2));
// console.log((5).toString(2));

// function bar() {
//   console.log("bar");
// }
// function baz() {
//   console.log("baz");
// }
// // function foo() {
// //   console.log("foo");
// //   setTimeout(bar, 0); // setTimeout만 추가했다.
// //   baz();
// // }
// // foo();

// setTimeout(bar(), 0);

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// const result = add(1); // 여기서 result는 앞서 반환한 함수를 가리킨다.
// console.log(result);
// const result2 = result(2);
// console.log(result2);
import { atom, useAtom, useAtomValue } from "jotai";
const counterState = atom(0);
function Counter() {
  const [, setCount] = useAtom(counterState);
  function handleButtonClick() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <button onClick={handleButtonClick}>+</button>
    </>
  );
}
const isBiggerThan10 = atom((get) => get(counterState) > 10);
function Count() {
  const count = useAtomValue(counterState);
  const biggerThan10 = useAtomValue(isBiggerThan10);
  return (
    <>
      <h3>{count}</h3>
      <p>count is bigger than 10: {JSON.stringify(biggerThan10)}</p>
    </>
  );
}
export default function App() {
  return (
    <>
      <Counter />
      <Count />
    </>
  );
}
