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
app.use("/admission-form", formRoutes);


// 404 Error Page route
app.use((req, res) => {
  res.status(404).render("404", { title: "404 | Page Not Found" });
});

// Global error handler (prevents 502 Bad Gateway from unhandled errors)
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.stack || err);
  // If headers already sent, delegate to default Express error handler
  if (res.headersSent) return next(err);
  res.status(500).render("404", { title: "500 | Server Error" });
});

// Start the Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `🚀⚡ CIEFAL_SITE ⚡🚀 server is running on link => http://127.0.0.1:${PORT}`
  );
});
