const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const authRoute = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 8200;

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connect to MongoDB'))
    .catch((err) => console.log(err));


app.use(morgan('tiny'))

app.use(express.json());

app.use('/api/user', authRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`server is starting at port ${PORT}`));
