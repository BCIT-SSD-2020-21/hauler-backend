const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

mongoose.connection
    .once('open', () => console.log('connected'))
    .on('error', (error) => {
        console.log()
    })


