require("dotenv").config();

// Basic Imports
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist")
);

// Set View Engine as EJS
app.set("view engine", "ejs");

// Routes
const pageRoutes = require("./src/routes/pageRoutes");
const formRoutes = require("./src/routes/formRoutes");

app.use("/", pageRoutes);
app.use("/submit-form", formRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
