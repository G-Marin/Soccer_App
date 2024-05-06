const mongoose = require('mongoose');
require('dotenv').config();

//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//.then(() => (console.log('Connected to the database')))
//.catch((err) => console.log(err));

var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Respond with the error message and status code
  res.status(err.status || 500).send({
    error: {
      message: err.message,
      status: err.status
    }
  });
});


module.exports = app;
