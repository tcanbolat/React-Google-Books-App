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

router.get("/api/mylist", (req, res) => {
  db.Book.find({}).then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.json(err);
  });
});

router.delete("/api/mylist/:id", function(req, res) {
  const bookId = req.params.id;
  db.Book.findOneAndDelete({ _id: bookId }).then(dbBook => {
    res.json(dbBook);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;
