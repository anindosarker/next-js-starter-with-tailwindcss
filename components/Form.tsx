import React, { useState } from "react";

type Factor = {
  name: string;
  weight: number;
  value: number;
};

export default function Form() {
  const [factors, setFactors] = useState<Factor[]>([]);

  const addFactor = () => {
    setFactors([...factors, { name: "", weight: 0, value: 0 }]);
  };

  const updateFactor = (index: number, field: string, value: string) => {
    const newFactors = [...factors];
    const factor = newFactors[index];

    if (field === "name") {
      factor.name = value;
    } else if (field === "weight") {
      factor.weight = parseFloat(value);
    } else if (field === "value") {
      factor.value = parseFloat(value);
    }

    setFactors(newFactors);
  };

  return (
    <div>
      <h2 className="font-semibold my-5">Calculator Form</h2>
      <form className="flex flex-col p-2 bg-gray-200">
        {factors.map((factor, index) => (
          <div key={index} className="flex space-x-2">
            <div>Factor:</div>
            <input
              type="text"
              value={factor.name}
              onChange={(e) => updateFactor(index, "name", e.target.value)}
            />
            <div>Weight:</div>
            <input
              type="number"
              value={factor.weight}
              onChange={(e) => updateFactor(index, "weight", e.target.value)}
            />
            <div>Value:</div>
            <input
              type="number"
              value={factor.value}
              onChange={(e) => updateFactor(index, "value", e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addFactor}>
          Add Factor
        </button>
        <button type="submit" className="bg-blue-300 p-2">
          Calculate
        </button>
      </form>
    </div>
  );
}
