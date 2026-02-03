const express = require("express");
const router = express.Router();
const events = require('../models/events');




router.get('/', async(req, res)=>{
    let allEvent = await events.find()
    res.render('index', {allEvent: allEvent});
});


module.exports = router;