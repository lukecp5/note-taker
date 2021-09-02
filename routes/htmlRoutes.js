const path = require('path');
const router = require('express').Router();

// Router for the notes page for GET requests
router.get('/notes', (req, res) => {
      console.info(`${req.method} Request to the ${req.path} received`)
      res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Wildcard router to handle any request that isn't picked up by another router
router.get('*', (req, res) => {
      console.info(`${req.method} Request to the ${req.path} received`)
      res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;