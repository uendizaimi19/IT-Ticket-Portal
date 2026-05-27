const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes =
require("./routes/userRoutes");

const ticketRoutes =
require("./routes/ticketRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
extended:true
}));

app.use(
"/api/users",
userRoutes
);

app.use(
"/api/tickets",
ticketRoutes
);

app.get("/",(req,res)=>{

res.send("Backend running");

});

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{

console.log(
`Server running on port ${PORT}`
);

});