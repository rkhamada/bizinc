const express = require("express");
const app = express();
// const port = 3333;

app.get("/message", (req, res) => {
  res.json({
    message:
      "Success! Just like landing the perfect job, your request was spot-on. Time to celebrate with some well-earned coffee! ☕",
  });
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

module.exports = app;
