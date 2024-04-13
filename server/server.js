import express from "express";
require("dotenv").config(); //lay bien tu file dotenv
// import { config } from "dotenv";
import cors from "cors";
import initRoutes from "./src/routes/index.js"; //tu dong vao file index
import connectDatabase from "./src/config/connectDatabase.js";
// const app = express();
// config();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URl, //noi cho server biet url nay duoc phep truy cap
    methods: ["POST", "GET", "PUT", "DELETE"], // gioi han 4 method, ngoai 4 nay ra khong nhan
  })
); //config cho app them option
// 2 dong nay cau hinh cho app doc api gui len
app.use(express.json()); //doc dang json duoc gui len tu client
app.use(express.urlencoded({ extended: true })); //doc form data gui len kieu body

// app.use("/", (req, res) => {
//   res.send("server on...");
// });
//  tuong duong voi ham duoi
initRoutes(app);
connectDatabase();
const port = process.env.PORT || 8888;
const listner = app.listen(port, () => {
  console.log(`server is running on port ${listner.address().port}`);
});
