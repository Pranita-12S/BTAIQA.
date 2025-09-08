const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock API for test case generation
app.post("/generate-testcases", (req, res) => {
  const { requirement } = req.body;

  // Here you can integrate AI/DB/API logic. For now, we generate mock cases.
  const testCases = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `Test Case ${i + 1}`,
    description: `${requirement || "Sample requirement"} - description ${i + 1}`,
    steps: `Step 1: Do something\nStep 2: Verify result ${i + 1}`,
    expected: "Expected output goes here",
  }));

  res.json(testCases);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});







// app.post("/generate-testcases", (req, res) => {
//   const { requirement } = req.body;

//   // Example hardcoded response (you can make this dynamic later)
//   const testCases = [
//     {
//       id: 1,
//       name: "Test Case 1",
//       description: "Verify login with valid credentials",
//       steps: "1. Navigate to login page\n2. Enter valid username\n3. Enter valid password\n4. Click Login",
//       expected: "User is successfully logged in and redirected to dashboard"
//     },
//     {
//       id: 2,
//       name: "Test Case 2",
//       description: "Verify login with invalid password",
//       steps: "1. Navigate to login page\n2. Enter valid username\n3. Enter invalid password\n4. Click Login",
//       expected: "Error message displayed: 'Invalid username or password'"
//     },
//     {
//       id: 3,
//       name: "Test Case 3",
//       description: "Verify login with empty fields",
//       steps: "1. Navigate to login page\n2. Leave username and password blank\n3. Click Login",
//       expected: "Error message displayed: 'Username and password required'"
//     },
//     {
//       id: 4,
//       name: "Test Case 4",
//       description: "Verify logout functionality",
//       steps: "1. Login with valid credentials\n2. Click Logout button",
//       expected: "User is logged out and redirected to login page"
//     }
//   ];

//   res.json(testCases);
// });
