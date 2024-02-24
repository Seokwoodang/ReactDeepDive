import React from "react";

const FirstChapter = () => {
  const symbol1 = Symbol("key2");
  const symbol2 = Symbol("key2");
  const object1 = {};

  console.log(typeof symbol1);
  console.log(symbol1 === symbol2);
  console.log(typeof object1);
  Object.is();

  return <div>FirstChapter</div>;
};

export default FirstChapter;
