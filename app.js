const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const passport = require('passport');


//passport config
require('./config/passport')(passport);

//load routes
const auth = require('./routes/auth');

const app = express();

//use routes
app.use('/auth',auth);


app.get('/', (req, res) => {
    res.send('Halo');
})


app.listen(port, () => {
    console.log(`Start server on port ${port}`);
});