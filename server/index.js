const express = require('express');
const mongoose = require('mongoose');
const { urlencoded, json } = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', function () {
  console.log('Uspesno povezivanje sa bazom!');
});

app.use(json());
app.use(urlencoded({ extended: false }));

const usersRoutes = require('./routes/usersRoutes');
app.use('/usersRoutes', usersRoutes);

app.listen(port, () => {
  console.log(`Aplikacija je aktivna na adresi http://localhost:${port}`);
});
