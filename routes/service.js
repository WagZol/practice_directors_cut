const router = require('express').Router();
const Service = require('../models/service.model');
const runAsyncWrapper=require('../_utils/asyncHandlers');

// GET ALL SERVICE
router.get('/', runAsyncWrapper(async (req, res) => {
    res.json(await Service.find());
}))

// ADD SERVICE
router.post('/', runAsyncWrapper(async(req, res) => {
    const newService=new Service(req.body);
    await newService.save();
    res.json("New service added");
}))

// GET SPECIFIC SERVICE
router.get('/:name', runAsyncWrapper(async (req, res) => {
    res.json(await getService(req, res));
}));

// DELETE SPECIFIC SERVICE
router.delete('/:id', runAsyncWrapper(async (req, res) => {
    await Service.findByIdAndDelete(req.params.id)
    res.json("Service deleted");
}))

// UPDATE SPECIFIC SERVICE
router.put('/:name', runAsyncWrapper(async(req, res) => {
    console.log(req.body)
    const updatedService=(await getService(req, res)).set(req.body);
    await updatedService.save()
    res.json("Service updated")
}));

async function getService(req, res) {
    const service = await Service.findByName(req.params.name);
    if (service == null)
        return res.status(404).json({message: "Cannot find service"});
    return service;
}

module.exports = router;
