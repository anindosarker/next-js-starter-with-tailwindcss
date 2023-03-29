import React, { FormEvent, FormEventHandler, useState } from "react";
import factorData from "../assets/factorData";
import { setFactorDataValue } from "../assets/factorData";
type Factor = {
  name: string;
  weight: number;
};

type Props = {};

export default function Parameters() {
  const [factors, setFactors] = useState<Factor[]>(factorData);
  const [addFactor, setAddFactor] = useState(false);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [avg, setAvg] = useState(0);

  const addFactorHandler = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = {
      name: name,
      weight: weight,
    };

    console.log(formData);

    setFactors([...factors, formData]);
    setAddFactor(false);
  };

  const calculateWeightedAverage = (event: FormEvent) => {
    event.preventDefault();
  //log the form data
    console.log(event.target);
  
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <h2 className="font-semibold my-5">Add factors to get started</h2>
      <form
        className="flex flex-col p-2 bg-gray-100 rounded shadow-lg"
        onSubmit={calculateWeightedAverage}
      >
        {factors.map((item, index) => (
          <div
            key={index}
            className="flex justify-around items-baseline space-x-2 space-y-2 "
          >
            <p>Factor: {item.name} </p>
            <p>Weight: {item.weight} </p>
            <label htmlFor="score">Score</label>
            <input type="number" name="score" id="score" className="rounded" />
          </div>
        ))}
        {addFactor && (
          <div className="flex  items-baseline justify-center space-x-2 space-y-2">
            <label htmlFor="factor">Name</label>
            <input
              type="text"
              name="factor"
              id="factor"
              className="rounded"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              name="weight"
              id="weight"
              className="rounded"
              onChange={(e: any) => {
                setWeight(e.target.value);
              }}
            />
          </div>
        )}
        <div className="flex justify-around items-baseline space-y-2">
          <button
            type="submit"
            className="shadow text-sm font-medium
              max-w-xs text-center rounded-md bg-green-200 p-2 hover:text-white hover:shadow-md hover:bg-green-400"
          >
            Calculate Weighted Average
          </button>
          {addFactor ? (
            <button
              type="button"
              onClick={addFactorHandler}
              className="shadow text-sm font-medium
              max-w-xs text-center rounded-md bg-blue-200 p-2 hover:text-white hover:shadow-md hover:bg-blue-400"
            >
              Confirm
            </button>
          ) : (
            <button
              type="button"
              className="shadow text-sm font-medium
              max-w-xs text-center rounded-md bg-blue-200 p-2 hover:text-white hover:shadow-md hover:bg-blue-400"
              onClick={() => {
                setAddFactor(true);
              }}
            >
              Add factor
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
