const router = require("express").Router();
const db = require("../models/index");

router.post("/api/savebook", (req, res) => {
  savedBook = req.body;
  console.log(savedBook);
  db.Book.create(savedBook)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
