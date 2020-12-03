const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const openValidators = [
    { validator: isTimeFormat, msg: 'Not valid time format!' }
];

const closeValidators = [
    { validator: isTimeFormat, msg: 'Not valid time format!' },
    { validator: isCloseAfterOpen, msg: 'Close time must be after than the open time' }
];

const openingHourSchema = new Schema({
    day: {
        type: String,
        enum: ['hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat', 'vasárnap'],
        required: true,
        unique: true
    },
    open: {
        type: String,
        validate: [isTimeFormat, 'Not valid time format!'],
        required: true
    },
    close: {
        type: String,
        validate: closeValidators,
        required: true
    }
}, {timStamps: true});

openingHourSchema.statics.findByDay = function (day) {
    return this.findOne({day});
};

function isTimeFormat(string) {
    const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(string);
};

function compareTimeStrings(openTime, closeTime){
    const openTimeNum = parseInt(openTime.replace(":", ""));
    const closeTimeNum = parseInt(closeTime.replace(":", ""));
    return closeTimeNum === 0 || openTimeNum < closeTimeNum;
}

function isCloseAfterOpen(closeTime) {
    let openTime = this.open;
    console.log(this);
    return compareTimeStrings(openTime, closeTime);
}

const OpeningHourModel = mongoose.model('OpeningHour', openingHourSchema);

module.exports = OpeningHourModel;