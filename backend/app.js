const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const articleRoutes = require("./routes/articleRoutes");

//express instance
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use("api/articles", articleRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server listening on port", process.env.PORT || 8000);
    });
  })
  .catch(console.error);
