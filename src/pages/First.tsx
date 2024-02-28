import React from "react";

const First = () => {
  type Hello = { [key in "hello" | "hi"]: string };

  const hello: Hello = {
    hello: "hellasdfo",
    hi: "adsfhi",
  };

  return <div>typescriptdd</div>;
};

export default First;
