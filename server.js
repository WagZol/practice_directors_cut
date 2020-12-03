const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');

// mongoose.Promise = require('bluebird');
require('dotenv').config();

const application = express();
// let gridFsBucketConnection;
const port = process.env.PORT || 5000;

application.use(cors());
application.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const mongoDbConnection = mongoose.connection;
mongoDbConnection.once('open', () => {
    console.log('MongoDb connection established succesfully');
    // gridFsBucketConnection = new mongoose.mongo.GridFSBucket(mongoDbConnection.db, {
    //     bucketName: "uploadedImages"
    // });
});

// create storage engine
// const storage = new GridFsStorage({
//     url: process.env.ATLAS_URI,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 const filename = buf.toString('hex') + path.extname(file.originalname);
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName: 'uploads'
//                 };
//                 resolve(fileInfo);
//             });
//         });
//     }
// });

// const upload = multer({storage});

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

