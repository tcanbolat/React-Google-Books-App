const router = require("express").Router();
const db = require("../models/index");

router.post("/api/savebook", (req, res) => {
  savedBook = req.body;
  savedBookId = req.body.bookid;
  console.log(savedBook);
  // console.log(savedBookId);
  db.Book.find({ bookid: savedBookId }).then(books => {
    // console.log(books);
    if (books.length > 0) {
      res.json("book already saved");
    } else {
      db.Book.create(savedBook)
        .then(dbBook => {
          res.json(dbBook);
        })
        .catch(err => {
          res.json(err);
        });
    }
  });
});

router.get("/api/mylist", (req, res) => {
  db.Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/api/mylist/:id", function(req, res) {
  const bookId = req.params.id;
  db.Book.findOneAndDelete({ _id: bookId })
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
