const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/tickets", require("./routes/ticketRoutes"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);