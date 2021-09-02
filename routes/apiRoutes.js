const router = require("express").Router();
const database = require("../db/db");
router.get("/notes", (req, res) => {
  // Grab the notes list (this should be updated for every new note and deleted note.)
  console.info(`Retrieving notes from ${database}`);
  res.json(database);
});

module.exports = router;
