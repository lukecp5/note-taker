const router = require("express").Router();
const database = require("../db/db");
const fs = require("fs");
const path = require("path");


router.get("/notes", (req, res) => {
  // Grab the notes list (this should be updated for every new note and deleted note.)
  console.info(`Retrieving notes from the database...`);
  res.json(database);
});

router.post("/notes", (req, res)=>{
      let jsonFilePath = path.join(__dirname, "/db/db.json");
      console.info(req.body);

      // This assigns an ID to the newNote, It will be a random number between 1 and 100
      // We push it to db.json.

      // database.push(newNote)

      // Write the db.json file again.
      // fs.writeFile(jsonFilePath, JSON.stringify(database), function (err) {(err)? console.log(err):console.log("Successfully written") });

      // Gives back the response, which is the user's new note. 
      res.json(req.body);
})
module.exports = router;
