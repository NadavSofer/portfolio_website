const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config();

const app = express();
app.use(cors());


app.listen(process.env.PORT || 3001, () => {
    console.log(`Server listening on ${process.env.PORT || 3001}`);
});

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.static(path.join(__dirname, "site-frontend/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./site-frontend/build", "index.html"));
});