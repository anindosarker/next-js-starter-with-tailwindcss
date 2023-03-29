import React, { FormEvent, FormEventHandler, useState } from "react";
import { factorData } from "../assets/factorData";
type Factor = {
  name: string;
  weight: number;
};

type Props = {};

export default function Parameters() {
  //handle form submission and create a new factor array to store the data

  const [factors, setFactors] = useState<Factor[]>(factorData);
  const [addFactor, setAddFactor] = useState(false);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);

  const submitHandler = (event: FormEvent) => {
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

  return (
    <div>
      <h2 className="font-semibold my-5">Add factors to get started</h2>
      <form className="flex flex-col p-2 bg-gray-200">
        {factors.map((item, index) => (
          <div key={index} className="flex justify-center items-center space-x-2 space-y-2 font-mono">
            <div>Factor: {item.name} </div>
            <div>Weight: {item.weight} </div>
            <label htmlFor="score">Score</label>
            <input type="number" name="score" id="score" className="rounded"/>
          </div>
        ))}
        {addFactor ? (
          <div>
            <label htmlFor="factor">Name</label>
            <input
              type="text"
              name="factor"
              id="factor"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              name="weight"
              id="weight"
              onChange={(e: any) => {
                setWeight(e.target.value);
              }}
            />
            <button type="button" onClick={submitHandler}>
              Submit+
            </button>
          </div>
        ) : (
          <button
            type="button"
            className=""
            onClick={() => {
              setAddFactor(true);
            }}
          >
            Add factor
          </button>
        )}

        <button type="submit" className=" ">
          Calculate Weighted Average
        </button>
      </form>
    </div>
  );
}
