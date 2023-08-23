// Function to fetch data from an API and measure time taken
async function fetchData(apiUrl) {
  const startTime = performance.now();
  const response = await fetch(apiUrl);
  const data = await response.json();
  const endTime = performance.now();
  const timeTaken = endTime - startTime;
  return { data, timeTaken };
}

// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to display results in the table
function displayResults(promiseType, timeTaken, elementId) {
  const outputElement = document.getElementById(elementId);
  outputElement.textContent = `${timeTaken.toFixed(2)} ms`;
}

// Perform API calls using Promise.all
async function performPromiseAll() {
  const startTime = performance.now();
  try {
    const results = await Promise.all(apiUrls.map(fetchData));
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    displayResults("Promise.all()", timeTaken, "output-all");
  } catch (error) {
    console.error(error);
  }
}

// Perform API calls using Promise.any
async function performPromiseAny() {
  const startTime = performance.now();
  try {
    const results = await Promise.any(apiUrls.map(fetchData));
    const endTime = performance.now();
    const timeTaken = endTime - startTime;
    displayResults("Promise.any()", timeTaken, "output-any");
  } catch (error) {
    console.error(error);
  }
}

// Call the functions to perform API calls and display results
performPromiseAll();
performPromiseAny();
