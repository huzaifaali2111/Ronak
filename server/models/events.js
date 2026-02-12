const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventschema = new Schema({
    event_name: {
        type: String,
        required: true
    },
    event_description: {
        type: String,
    },
    event_location: {
        type: String,
        required: true
    },
    event_date: {
        type: Date,
        required: true
    },
    event_start_time: {
        type: String,
        required: true
    },
    event_end_time: {
        type: String
    },
    event_type: {
        type: String,
        required: true
    },
    event_price: {
        type: String,
        required: true,
        default: "free"
    },
    event_image:{
        type: String,
        default: '1316.jpg'
    }
})
module.exports = mongoose.model('event',eventschema);