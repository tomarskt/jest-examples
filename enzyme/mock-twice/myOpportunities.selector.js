import { dependencyFunction } from "./dependency";

const getMyOpportunities = () => {
  const opportunities = dependencyFunction();  // dependency function needs to be mocked
  
  console.warn('----------', opportunities)
  // this is how you compare string;
  return opportunities.sort((o1, o2) => (o1.name < o2.name ? -1 : 1));
};

export default getMyOpportunities;
