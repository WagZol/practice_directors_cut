const router = require('express').Router();
const OpeningHour = require('../models/openingHour.model');
const runAsyncWrapper=require('../_utils/asyncHandlers');

// GET ALL OPENING HOUR
router.get('/', runAsyncWrapper(async (req, res) => {
    res.json(await OpeningHour.find());
}))

// ADD OPENING HOUR
router.post('/', runAsyncWrapper(async(req, res) => {
    const newOpeningHour=new OpeningHour(req.body);
    await newOpeningHour.save();
    res.json(`New opening hour added on ${newOpeningHour.day}`);
}))

// GET SPECIFIC OPENING HOUR
router.get('/:day', runAsyncWrapper(async (req, res) => {
    res.json(await getOpeningHour(req, res));
}));

// DELETE SPECIFIC OPENING HOUR
router.delete('/:id', runAsyncWrapper(async (req, res) => {
    await OpeningHour.findByIdAndDelete(req.params.id)
    res.json(`Opening hour deleted`);
}))

// UPDATE SPECIFIC OPENING HOUR
router.put('/:day', runAsyncWrapper(async(req, res) => {
    const updatedOpeningHour=(await getOpeningHour(req, res)).set(req.body);
    await updatedOpeningHour.save()
    res.json(`Opening hour on ${req.params.day} updated`)
}));

async function getOpeningHour(req, res) {
    const openingHour = await OpeningHour.findByDay(req.params.day);
    if (openingHour == null)
        return res.status(404).json({message: "Cannot find day"});
    console.log(openingHour)
    return openingHour;
}

module.exports = router;

// const router = require('express').Router();
// const mongoose = require('mongoose');
// const Contact = require('../models/contact.model');
//
// // GET ALL CONTACT
// router.route('/').get((req, res) => {
//     Contact.find()
//         .then(contact => res.json(contact))
//         .catch(error => res.status(400).json(`Error: ${error}`));
// })
//
// // ADD CONTACT
// router.route('/').post((req, res) => {
//     const newContact = new Contact({
//         name: req.body.name,
//         uri: req.body.uri
//     })
//     newContact.save()
//         .then(() => res.json("New contact added"))
//         .catch(error => res.status(400).json(`Error: ${error}`));
// })
//
// // GET SPECIFIC CONTACT
// router.route('/:id').get((req, res) => {
//     Contact.findById(req.params.id)
//         .then(contact => res.json(contact))
//         .catch(error => res.status(400).json(`Error: ${error}`));
// })
//
// // DELETE SPECIFIC CONTACT
// router.route('/:id').delete((req, res) => {
//     Contact.findByIdAndDelete(req.params.id)
//         .then(() => res.json("Contact deleted"))
//         .catch(error => res.status(400).json(`Error: ${error}`));
// })
//
// // UPDATE SPECIFIC CONTACT
// router.route('/:id').post((req, res) => {
//     Contact.findById(req.params.id)
//         .then(contact => {
//             contact.name = req.body.name,
//                 contact.uri = req.body.uri,
//
//                 contact.save()
//                     .then(() => res.json("New contact added"))
//                     .catch(error => res.status(400).json(`Error: ${error}`));
//         })
//         .catch(error => res.status(400).json(`Error: ${error}`));
// });
//
// module.exports=router;
