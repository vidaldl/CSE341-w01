const express = require('express');
const app = express();
const port = 3000;

// Routes
app.use('/', require('./routes'))

const mongodb = require('./db/connect');

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});