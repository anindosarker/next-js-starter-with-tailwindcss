import React, { FormEvent, FormEventHandler, useState } from "react";
import factorData from "../assets/factorData";
import { setFactorDataValue } from "../assets/factorData";

export default function ScoreCalculator() {
  const [wavg, setWavg] = useState(0);
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      weight: "",
      score: "",
    },
  ]);

  const handleFormChange = (index: number, e: FormEvent) => {
    const data = [...inputFields];
    data[index][e.target.name] = e.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newField = {
      name: "",
      weight: "",
      score: "",
    };

    setInputFields([...inputFields, newField]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
    //calculate weighted average from the array of objects in inputfields. inputfields is an array of objects with name, weight, and score properties
    //loop through the array of objects and multiply the weight by the score. add the results together and divide by the total number of objects in the array

    const totalWeight = inputFields.reduce((acc, curr) => {
      return acc + Number(curr.weight);
    }, 0);

    const totalScore = inputFields.reduce((acc, curr) => {
      return acc + Number(curr.score * curr.weight);
    }, 0);

    const weightedAverage = totalScore / totalWeight;
    console.log("weightedAverage", weightedAverage);
    setWavg(weightedAverage);
    console.log("totalScore", totalScore);
    console.log("totalWeight", totalWeight);

    setFactorDataValue(inputFields);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Factor Calculator</h1>
      <form className="p-6 my-8 bg-white rounded-lg shadow-md">
        {inputFields.map((input, index) => {
          return (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <label
                className="text-xs font-semibold text-gray-600"
                htmlFor="name"
              >
                Factor Name
                <input
                  className="text-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
              </label>
              <label
                className="text-xs font-semibold text-gray-600"
                htmlFor="weight"
              >
                Weight
                <input
                  className="text-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="weight"
                  value={input.weight}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
              </label>

              <label
                className="text-xs font-semibold text-gray-600"
                htmlFor="score"
              >
                Score
                <input
                  className="text-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="score"
                  value={input.score}
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                />
              </label>
            </div>
          );
        })}
        <div className="flex justify-around">
          <button
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            type="button"
            onClick={addFields}
          >
            Add More..
          </button>
          <button
            className="px-4 py-2 text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            type="submit"
            onClick={handleSubmit}
          >
            Calculate
          </button>
        </div>
      </form>
      <h1 className="text-2xl font-semibold">Weighted Average</h1>
      <p className="text-2xl font-semibold">{wavg}</p>
      <h2>inputFields</h2>
      <pre className="text-xs">{JSON.stringify(inputFields, null, 2)}</pre>
      <h2>factordata</h2>
      <pre className="text-xs">{JSON.stringify(factorData, null, 2)}</pre>
    </div>
  );
}
