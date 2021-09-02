// Require dependencies for the application
const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// Set up the application to use the Express middleware for routing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Tell the application to use the environmental variable port if one is available, otherwise use the default(3001)
const PORT = process.env.PORT || 3001;

// Set up the application to use the public directory for static files
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use('/', htmlRoutes);

// Tell the application to listen on port 3001, unless a port as an environment variable is specified
app.listen(PORT, function () {
  console.log(`Express server listening on port: ${PORT}`);
});
