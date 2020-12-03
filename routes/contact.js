const router = require('express').Router();
const Contact = require('../models/contact.model');
const runAsyncWrapper=require('../_utils/asyncHandlers');

// GET ALL CONTACT
router.get('/', runAsyncWrapper(async (req, res) => {
    res.json(await Contact.find());
}))

// ADD CONTACT
router.post('/', runAsyncWrapper(async(req, res) => {
    const newContact=new Contact(req.body);
    await newContact.save();
    res.json("New contact added");
}))

// GET SPECIFIC CONTACT
router.get('/:name', runAsyncWrapper(async (req, res) => {
    res.json(await getContact(req, res));
}));

// DELETE SPECIFIC CONTACT
router.delete('/:id', runAsyncWrapper(async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id)
    res.json("Contact deleted");
}))

// UPDATE SPECIFIC CONTACT
router.put('/:name', runAsyncWrapper(async(req, res) => {
    const updatedContact=(await getContact(req, res)).set(req.body);
    await updatedContact.save()
    res.json("Contact updated")
}));

async function getContact(req, res) {
    const contact = await Contact.findByName(req.params.name);
    if (contact == null)
        return res.status(404).json({message: "Cannot find contact"});
    console.log(contact)
    return contact;
}

module.exports = router;
