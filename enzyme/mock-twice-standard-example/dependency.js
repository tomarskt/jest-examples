const dependencyFunction = () => {
  throw new Error("you should never see me in your unit test");
};
const anotherFunction=()=>{
  console.log("this cant' be mocked. must use the original implementation");
}
export { dependencyFunction };
