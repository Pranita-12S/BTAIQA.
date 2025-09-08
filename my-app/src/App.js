






// import React, { useState } from "react";
// import Header from "./components/Header";
// import TestCaseForm from "./components/TestCaseForm";
// import TestCaseTable from "./components/TestCaseTable";
// import "./App.css"; // Import CSS file

// function App() {
//   const [testCases, setTestCases] = useState([]);

//   const handleGenerate = (requirement) => {
//     const newCases = [
//       {
//         id: 1,
//         name: "Test Case 1",
//         description: "XYZ",
//         steps: "Nunc accumsan diam in lacus sagittis, eget condimentum",
//         expected: "Vestibulum a tempor nibh",
//       },
//     ];
//     setTestCases(newCases);
//   };

//   return (
//     <div className="app-container">
//       <Header />
//       <div className="card">
//         <TestCaseForm onGenerate={handleGenerate} />
//         <TestCaseTable testCases={testCases} />
//       </div>
//     </div>
//   );
// }

// export default App;















import React, { useState } from "react";
import Header from "./components/Header";
import TestCaseForm from "./components/TestCaseForm";
import TestCaseTable from "./components/TestCaseTable";
import "./App.css"; // Import CSS file






function App() {
  const [testCases, setTestCases] = useState([]);
  const [loading, setLoading] = useState(false);

  // const handleGenerate = async () => {
  //   setLoading(true);
  //   try {
  //     // Using a free placeholder API (you can change this to any API you want)
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  //     const data = await response.json();

  //     // Format API response into your test case table format
  //     const newCases = data.map((item, index) => ({
  //       id: item.id,
  //       name: `Test Case ${index + 1}`,
  //       description: item.title,
  //       steps: item.body,
  //       expected: "Expected output generated from API",
  //     }));

  //     setTestCases(newCases);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };




const handleGenerate = async (requirement) => {
  setLoading(true);
  try {
    const response = await fetch("http://localhost:5000/generate-testcases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requirement }),
    });

    const data = await response.json();
    setTestCases(data);
  } catch (error) {
    console.error("Error fetching test cases:", error);
  } finally {
    setLoading(false);
  }
};










  return (
    <div className="app-container">
      <Header />
      <div className="card">
        <TestCaseForm onGenerate={handleGenerate} />
        {loading ? <p>Loading...</p> : <TestCaseTable testCases={testCases} />}
      </div>
    </div>
  );
}

export default App;






