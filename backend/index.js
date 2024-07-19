const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const accountRoutes = require("./routes/accountRoutes");

app.use(
  cors({
    origin: "https://payments-app-dusky.vercel.app/",
    credentials: true,
  })
);

app.use(express.json());
require("dotenv").config();

const dbConnect = require("./config/db");
dbConnect();

// Routes
app.use("/api/v1/user", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/account", accountRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Your server is up and running..." });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
