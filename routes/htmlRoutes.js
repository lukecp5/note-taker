const path = require('path');
const router = require('express').Router();


router.get('/notes', (req, res) => {
      console.info(`${req.method} Request to the ${req.path} received`)
      res.sendFile(path.join(__dirname, '../public/notes.html'));
});


module.exports = router;