let factorData = [
  {
    id: 1,
    name: "Factor 1",
    description: "This is factor 1",
    value: 0,
    weight: 0.2,
  },
  {
    id: 2,
    name: "Factor 2",
    description: "This is factor 2",
    value: 0,
    weight: 0.2,
  },
];

//make a function to set the value of the factor
export const setFactorDataValue = (newData) => {
  factorData = newData;
};

export default factorData;
