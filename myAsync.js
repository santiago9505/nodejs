const thirdFunction = () => {
  console.log("I am the last one");
};

const secondFunction = () => {
  setTimeout(() => {
    thirdFunction();
  }, 1000);
  console.log("I am the second one");
};

const firstFunction = () => {
  setTimeout(() => {
    secondFunction();
  }, 1000);
  console.log("I am the first one");
};

firstFunction();
