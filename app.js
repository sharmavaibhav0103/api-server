const express = require("express");
const fs = require("fs"); // Import the 'fs' module

const app = express();
const PORT = process.env.PORT || 5000;
var count = 0;

app.get("/api/data", (req, res) => {
  console.log("test", ++count);
  // Read the contents of the 'data.txt' file
  fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).json({ message: "Error retrieving data" });
    } else {
      // Parse the data as JSON
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
