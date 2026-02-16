const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const join_eventschema = new Schema({
   event_id: {
        type: String,
        required: true
       
    },
    user_name: {
        type: String,
        required: true
        
    },
    user_phone: {
        type: String,

    },
    user_email: {
        type: String,
        required: true
        
    }
})
module.exports = mongoose.model('join-event',join_eventschema);