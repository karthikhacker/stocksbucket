const dotend = require("dotenv");
require('dotenv').config();

module.exports = {
    MONGOURI: process.env.MONGOURI,
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_ACCOUNT_ACTIVATION: process.env.JWT_ACCOUNT_ACTIVATION,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    CLIENT_URL: process.env.CLIENT_URL,
    EMAIL_FROM: process.env.EMAIL_FROM
}