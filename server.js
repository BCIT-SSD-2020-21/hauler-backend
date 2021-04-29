const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/post-routes.js');
const serviceProvidersRoutes = require('./routes/serviceProvider-router.js');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use('/api/posts', postRoutes);
app.use('/api/service-providers', serviceProvidersRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

mongoose.connection
    .once('open', () => console.log('connected'))
    .on('error', (error) => {
        console.log(error.message)
    })


mongoose.set('useFindAndModify', false);