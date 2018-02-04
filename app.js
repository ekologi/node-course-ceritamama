const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Halo');
})


app.listen(port, () => {
    console.log(`Start server on port ${port}`);
});