const router = require("express").Router();
const db = require("../db/db");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

router.get("/notes", (req, res) => {
  // Grab the notes list (this should be updated for every new note and deleted note.)
  console.info(`Retrieving notes from the database...`);
  res.json(db);
});

router.delete("/api/notes/:id", (req, res) => {
  for(i = 0; i < db.length; i++) {
    if(db[i].id === req.params.id) {
      db.splice(i,1);  
      break;
    }else{
      return "Error: Note not found!"
    }
  }
  fs.writeFileSync(jsonFilePath, JSON.stringify(db), (err)=>
  {
    console.info(`Something went wrong while trying to delete the note with ID: ${req.params.id}`);
    console.error(err);
  })

  console.info(`Deleting note ${req.body}`);
  res.json(req.body.title);
});

router.post("/notes", (req, res)=>{
      let jsonFilePath = path.join(__dirname, "../db/db.json");

      let note = req.body;
      note.id = uuid.v4();
      console.log(`The note's ID is: ${note.id}`);
      // note.id = Math.floor(Math.random()*1000);
      console.info(`Your new note titled: ${note.title} will be saved to the database with an id of ${note.id}`);   
      // This assigns an ID to the newNote, It will be a random number between 1 and 100
      // We push it to db.json.

      db.push(note);

      // Write the db.json file again.
      fs.writeFile(jsonFilePath, JSON.stringify(db), function (err) {(err)? console.log(err):console.log("Your note has been saved to the database."); });

      // Gives back the response, which is the user's new note. 
      res.json(note);
})
module.exports = router;
