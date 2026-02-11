const express = require("express");
const router = express.Router();
const events = require('../models/events');




router.get('/', async(req, res)=>{
    let allEvent = await events.find()
    res.render('index', {allEvent: allEvent});
});


router.get('/create-event', async(req, res)=>{
    res.render('create-event');
});


module.exports = router;