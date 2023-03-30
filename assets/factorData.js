let factorData = [
  {
    name: "Factor 1",
    value: 0,
    weight: 0.2,
  },
  {
    name: "Factor 2",
    value: 0,
    weight: 0.2,
  },
];

//make a function to set the value of the factor
export const setFactorDataValue = (newData) => {
  factorData = newData;
};

export default factorData;
