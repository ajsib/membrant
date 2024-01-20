//  server.js
const express = require('express');
const bodyParser = require('body-parser');  // parsing the incoming request bodies
const mongoose = require('mongoose');  //  MongoDB object modeling tool
const cors = require('cors');  // Cross-Origin Resource Sharing
const { DBCONNECTIONSTRING } = require('./config/env');

const app = express();

// Middleware
app.use(cors({ origin: '*'}));
app.use(express.json());
app.use(bodyParser.json());

// connect to mongodb
mongoose
.connect(DBCONNECTIONSTRING)
.then(() => {
    console.log("connected to mongodb")
})
.catch(err =>{
    ('Error connecting to MongoDB: ', err);
});

// Routes
// go here

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});