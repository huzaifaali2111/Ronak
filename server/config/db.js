const mongoose = require('mongooose');
const connectDB = async ()=>{
    mongoose.set('StrictQuery', false)
    const conn = await mongoose.connect(process.env.MONGODB_URI)
}