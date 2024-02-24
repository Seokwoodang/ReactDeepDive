import React from "react";

const First = () => {
  const maxInteger = Number.MAX_SAFE_INTEGER;
  // const bigInt1 = 9007199254740995n // 끝에 n을 붙이거나
  // const bigInt2 = BigInt("9007199254740995"); // BigInt 함수를 사용하면 된다.
  const number = 9007199254740992;
  // const bigint = 9007199254740992n

  const symbol1 = Symbol("key2");
  const symbol2 = Symbol("key2");

  // console.log(symbol1=== symbol2);

  return <div>First</div>;
};

export default First;
