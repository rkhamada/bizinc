const express = require('express');
const app = express();
// const port = 3333;

app.get('/message', (req, res) => {
  res.json({ message: "Hello, World!" });
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

module.exports = app;