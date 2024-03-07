// const 이진수_2 = 0b10;

// console.log(이진수_2 == (2).toString(10));
// console.log(0b10);
// console.log((2).toString(2));
// console.log((5).toString(2));

function bar() {
  console.log("bar");
}
function baz() {
  console.log("baz");
}
// function foo() {
//   console.log("foo");
//   setTimeout(bar, 0); // setTimeout만 추가했다.
//   baz();
// }
// foo();

setTimeout(bar(), 0);
