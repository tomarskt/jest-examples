const dependencyFunction = () => {
  throw new Error("you should never see me in your unit test");
};

export { dependencyFunction };
