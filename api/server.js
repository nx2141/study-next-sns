const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const cors = require("cors");

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

require("dotenv").config();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/posts",postsRoute);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));

app.use((err, req, res, next) => {
    console.error(`${new Date().toISOString()} - ${err.stack}`);
    res.status(500).send('Something broke!');
  });
