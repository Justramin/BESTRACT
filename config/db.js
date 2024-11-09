const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('MONGODB Connected Successfuly ! ')
        
    } catch (error) {
        console.log('error catched: ',error)
    }
}

 

module.exports =  connectDB