const closerFunction = () => {
  let hello = 0;

  return function () {
    console.log(hello);
  };
};
