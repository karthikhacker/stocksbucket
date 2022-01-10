const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./backend/config/config');
const app = express();
require('dotenv').config()

//use routes
const userRoutes = require('./backend/routes/user');
const accountRoutes = require('./backend/routes/account');

//Mongodb connection
mongoose.connect(config.MONGODB_URI).then(() => {
    console.log('MONGODB CONNECTED')
}).catch(error => {
    console.log(error);
})

//Middlewares
app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '50mb' }))
app.use(morgan('dev'));

//userRoutes
app.use('/api', userRoutes);
app.use('/api', accountRoutes);
// server 
app.listen(process.env.PORT, () => {
    console.log('App running at port ', process.env.PORT);
})