const dotenv = require('dotenv');

// load the local .env variables
dotenv.config();

module.exports = {
    DBCONNECTIONSTRING: process.env.MONGO_URI_AIDAN,
    JWT_SECRET: process.env.JWTSECRET,
};