import React from "react";

const First = () => {
  type Hello = { [key in "hello" | "hi"]: string };

  const hello: Hello = {
    hello: "hellasdfo",
    hi: "adsfhi",
  };

  console.log(Object.values(hello));
  console.log("ndndn");

  return <div>typescriptdd</div>;
};

export default First;
