const express = require("express");

const PORT = process.env.PORT || 3004;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Container is online" });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
