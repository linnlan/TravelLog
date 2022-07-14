const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const hotelRoute = require("./routes/hotels");

dotenv.config();

app.use(express.json());

mongoose
.connect("mongodb+srv://user123:123@cluster0.egz5o.mongodb.net/pin?retryWrites=true&w=majority")
.then(()=>{
    console.log("MongoDB connected!!")
})
.catch((err)=> console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);
app.use("/api/hotels", hotelRoute);

app.listen(80,()=>{
    console.log("Backend server is running!")
});