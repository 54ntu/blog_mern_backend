const express = require("express");
const cookiParser = require("cookie-parser");
const cors = require("cors");
const { blogrouter } = require("./routes/blog.routes");
const app = express();

app.use(
  cors({
    origin: ["https://blog-mern-frontend-iota.vercel.app/"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookiParser());

app.use("/api/v1", blogrouter);

module.exports = { app };
