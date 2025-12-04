require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const developerRoutes = require("./routes/developers");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/developers", developerRoutes);

app.get("/", (_, res) => res.send("Backend running"));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const connectToDatabaseAndRunServer = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "talrn_internship",
    });

    console.log("MongoDB Connected!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("MongoDB connection failed: ", err.message);
    process.exit(1);
  }
};

connectToDatabaseAndRunServer();
