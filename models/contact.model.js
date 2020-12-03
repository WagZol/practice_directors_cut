const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const contactSchema=new Schema({
    name: {type: String, required: true, unique: true},
    uri: {type: String, required: true},
    icon: {type: String, required: true}
}, {timStamps: true});

contactSchema.statics.findByName = function (name) {
    return this.findOne({name});
};

const ContactModel=mongoose.model('Contact', contactSchema);

module.exports=ContactModel;