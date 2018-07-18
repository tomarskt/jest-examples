import { getOpportunities } from "./opportunities.selector";

const getMyOpportunities = () => {
  const opportunities = getOpportunities();
  console.warn('----------', opportunities)
  // this is how you compare string;
  return opportunities.sort((o1, o2) => (o1.name < o2.name ? -1 : 1));
};

export default getMyOpportunities;
