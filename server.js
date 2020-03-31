const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require("./routes/bookApi"));

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://"+ process.env.MONGO_USER +":"+ process.env.MONGO_PASS + "@ds121189.mlab.com:21189/heroku_n0n5lwq6",
//   { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
// );

mongoose.connect("mongodb://localhost/reactreadinglist", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
