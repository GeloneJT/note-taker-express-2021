const express = require('express');
const fs = require('fs');


const noteRoutes = require('./routes/noteRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', apiRoutes);
app.use('/', noteRoutes);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});