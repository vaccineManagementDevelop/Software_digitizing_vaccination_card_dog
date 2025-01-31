// Import the express package
import express from 'express';

// Create an instance of the express app
const app = express();

// Define the port where the server will listen
const PORT = 4000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
