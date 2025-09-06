// This is the input form (requirement/user story + button).

import React, { useState } from "react";

function TestCaseForm({ onGenerate }) {
  const [requirement, setRequirement] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (requirement.trim() !== "") {
      onGenerate(requirement);//TestCaseForm Sends Requirement
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="font-semibold text-lg flex items-center">
        {/* <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span> */}
        <b >AI Test Case Generator</b>
      </h1>
{/* 
      <div>
        <label className="block font-medium mb-2">Requirement/User Story</label>
        <input
          type="text"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="Enter requirement or user story"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}






<div className="input-card">
  <label className="block font-semibold">Requirement / User Story</label>
  <input
    type="text"
    value={requirement}
    onChange={(e) => setRequirement(e.target.value)}
    placeholder="Enter requirement or user story"
    className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>







      {/* <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex justify-end mb-3"
      >
        Generate Test Cases
      </button> */}

<div className="flex justify-end mb-3">
  <button className="btn-generate, bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex justify-end mb-3">Generate Test Cases</button>
</div>


    </form>
  );
}

export default TestCaseForm;
