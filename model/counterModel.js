const mongoose = require('./connection').mongoose;
const db = require('./connection').db;

const counterSchema = mongoose.Schema({
    _id: { 
        type: String, 
        required: true 
    },
    seq: { 
        type: Number,
        default: 0 
    }
});


let counterModel = mongoose.model('counters', counterSchema);
module.exports = { counterModel };