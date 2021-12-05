const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./backend/config/config');
const app = express();
require('dotenv').config()

//use routes
const userRoutes = require('./backend/routes/user');

//Mongodb connection
mongoose.connect(config.MONGODB_URI).then(() => {
    console.log('MONGODB CONNECTED')
}).catch(error => {
    console.log(error);
})

//Middlewares
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));

//userRoutes
app.use('/api', userRoutes);

// server 
app.listen(process.env.PORT, () => {
    console.log('App running at port ', process.env.PORT);
})