// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { DBCONNECTIONSTRING } = require('./config/env');

// routes
const userRoutes = require('./routes/users.routes');
const projectRoutes = require('./routes/projects.routes');
const taskRoutes = require('./routes/tasks.routes');

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(bodyParser.json());


// Connect to MongoDB
mongoose
    .connect(DBCONNECTIONSTRING)
    .then(() => {
        console.log("Connected to MongoDB");

        // Only start the server if the database connection is successful
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); 
    });

// app routes
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);