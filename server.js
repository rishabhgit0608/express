const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); //Middleware for POST for getting data as body from the client
app.use("/api/contacts", require("./Routes/contactRoutes"));

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
