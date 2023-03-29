import React, { useState } from "react";

export default function Form() {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newField = { name: "", age: "" };

    setInputFields([...inputFields, newField]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  return (
    <div className="flex mt-20 border">
      <form onSubmit={handleSubmit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>
          );
        })}
        <button type="button" onClick={addFields}>Add More...</button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
