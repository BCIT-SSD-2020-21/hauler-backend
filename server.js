const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

require('dotenv').config();
const app = express();
const port =  3000;

//importing routes
const postRoutes = require('./routes/post-routes.js');
const serviceProvidersRoutes = require('./routes/serviceProvider-router.js');
const userRoutes = require('./routes/user-router.js');
const responseRoutes = require('./routes/response-routes.js')

//importing middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//defining restApi's
app.use('/api/posts', postRoutes);
app.use('/api/service-providers', serviceProvidersRoutes);
app.use('/api/users', userRoutes);
app.use('/api/response', responseRoutes);


//connecting to MongoAtlas
const uri = process.env.MONGO_URI;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.set("port", port);
        app.listen(port, () =>
        console.log(`App running successfully on port http://localhost:${port}`)
        );
    })
    .catch(err => {
        console.log(err)
});