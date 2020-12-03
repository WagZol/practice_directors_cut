const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const crypto = require('crypto');
const path = require('path');

// require('dotenv').config();

const application = express();
const port = process.env.PORT || 5000;

application.use(cors());
application.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const mongoDbConnection = mongoose.connection;
mongoDbConnection.once('open', () => {
    console.log('MongoDb connection established succesfully');
});

const serviceRouter = require('./routes/service')
const contactRouter = require('./routes/contact')
const openingHourRouter = require('./routes/openingHour')
application.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})


application.use('/services', serviceRouter);
application.use('/contacts', contactRouter);
application.use('/openingHours', openingHourRouter);


if (process.env.NODE_ENV==="production"){
    application.use(express.static('little-hair-studio/build'));
}

// module.exports.gridFsBucket = gridFsBucketConnection;

