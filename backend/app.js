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

mongoose.connect(process.env.)
