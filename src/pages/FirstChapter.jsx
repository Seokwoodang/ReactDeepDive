// import React from "react";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// const FirstChapter = () => {
//   // const symbol1 = Symbol("key2");
//   // const symbol2 = Symbol("key2");
//   // const object1 = {};

//   // console.log(typeof symbol1);
//   // console.log(symbol1 === symbol2);
//   // console.log(typeof object1);
//   // Object.is();

//   return <div>FirstChapter</div>;
// };

// export default FirstChapter;

// const ChildComponent = forwardRef((props, ref) => {
//   useEffect(() => {
//     // {current: undefined}
//     // {current: HTMLInputElement}
//     console.log(ref);
//   }, [ref]);
//   useImperativeHandle(
//     ref,
//     () => ({
//       alert: () => alert(props.value),
//     }),
//     // useEffect의 deps와 같다.
//     [props.value]
//   );

//   return <div>안녕!</div>;
// });

// function ParentComponent() {
//   const inputRef = useRef();
//   return (
//     <>
//       <input ref={inputRef} />
//       <ChildComponent ref={inputRef} />
//     </>
//   );
// }

// const ChildComponent = memo(({ value }: { value: string }) => {
//   useEffect(() => {
//     console.log("렌더링!");
//   });
//   return <>안녕하세요! {value}</>;
// });
// function ParentComponent() {
//   const [state, setState] = useState(1);
//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     setState(Number(e.target.value));
//   }
//   return (
//     <>
//       <input type="number" value={state} onChange={handleChange} />
//       <ChildComponent value="hello" />
//     </>
//   );
// }

function add(a) {
  return function (b) {
    return a + b;
  };
}
const result = add(1); // 여기서 result는 앞서 반환한 함수를 가리킨다.
console.log(result);
const result2 = result(2);
