const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');
const app = express();

//import config file
const config = require('./server/config/db');
//Routes 
const userRoutes = require('./server/routes/user');

//mongodb connection 
mongoose.connect(config.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(chalk.yellow('MONGODB CONNECTED.'))
})
//Middleware 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes middleware 
app.use('/api/v1', userRoutes);

//server listen
app.listen(process.env.PORT, () => {
    console.log(chalk.white(`App running at ${process.env.PORT}`))
})