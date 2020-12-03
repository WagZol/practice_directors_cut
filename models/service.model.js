const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    // name: {type: String, required: true, unique: true},
    image: {
        type: String,
        data: Buffer,
    },
    about: {type: String},
    group: {type: String, required: true},
    price: {type: String, required: true}
}, {timeStamps: true});

serviceSchema.statics.findByName = function (name) {
    return this.findOne({name});
};

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;