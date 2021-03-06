const express = require('express');

//require routes
const notesRoute = require('./routes/notesRoute');
const apiRoute = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', apiRoutes);
app.use('/', notesRoute);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});