const express = require('express');
const app = express();
const port = 5001; // Change this to an available port

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});