import React, { FormEvent, FormEventHandler, useState } from "react";
import factorData from "../assets/factorData";

export default function Parameters() {
  const [inputFields, setInputFields] = useState(factorData);

  const handleFormChange = (index: number, e: FormEvent) => {
    const data = [...inputFields];
    data[index][e.target.name] = e.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newField = {
      name: "",
      weight: "",
    };

    setInputFields([...inputFields, newField]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("inputFields", inputFields);

    //TODO : Store the data
  
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
            Save
          </button>
        </div>
      </form>

      <h2>inputFields</h2>
      <pre className="text-xs">{JSON.stringify(inputFields, null, 2)}</pre>
      <h2>factordata</h2>
      <pre className="text-xs">{JSON.stringify(factorData, null, 2)}</pre>
    </div>
  );
}
