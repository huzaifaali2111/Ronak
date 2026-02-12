const express = require("express");
const router = express.Router();
const events = require('../models/events');
const multer = require('multer');
const path = require('path');


// Multer Image Handling in the Upload Folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });





router.get('/', async (req, res) => {
    let allEvent = await events.find()
    res.render('index', { allEvent: allEvent });
});




router.get('/create-event', async (req, res) => {
    res.render('create-event');
});



router.post('/create-event', upload.single('image'), async (req, res) => {
    try {
        const { event_name, event_type, event_price, event_date, event_start_time, event_end_time, event_location, event_description } = req.body || {};
        const imagePath = req.file ? req.file.filename : 'default.jpg';
        const newEvent = new events({
            event_name: event_name,
            event_description: event_description,
            event_location: event_location,
            event_date: event_date,
            event_start_time: event_start_time,
            event_end_time: event_end_time,
            event_type: event_type,
            event_price: event_price,
            event_image: imagePath,

        })
        await newEvent.save();
        res.redirect('create-event')
        res.send('Event has been Created');

    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).send("Server Error");
    }

});


module.exports = router;