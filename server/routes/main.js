const express = require("express");
const router = express.Router();
const events = require('../models/events');




router.get('/', async (req, res) => {
    let allEvent = await events.find()
    res.render('index', { allEvent: allEvent });
});


router.get('/create-event', async (req, res) => {
    res.render('create-event');
});

router.post('/create-event', async (req, res) => {
    try {
        const { event_name,event_type,event_price,event_date,event_start_time,event_end_time,event_location,event_description  } = req.body || {};
        const newEvent = new events({
            event_name,
            event_type,
            event_price,
            event_date,
            event_start_time,
            event_end_time,
            event_location,
            event_description
        })
        await newEvent.save();
        res.send('Event has been Created');

    } catch (error) {
        console.log(error)
    }

});


module.exports = router;