const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//importing routes
const postRoutes = require('./routes/post-routes.js');
const serviceProvidersRoutes = require('./routes/serviceProvider-router.js');

//importing middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


//defining restApi's
app.use('/api/posts', postRoutes);
app.use('/api/service-providers', serviceProvidersRoutes);


//console logging port connection
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})


//connecting to MongoAtlas
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

mongoose.connection
    .once('open', () => console.log('connected'))
    .on('error', (error) => {
        console.log(error.message)
    })


mongoose.set('useFindAndModify', false);