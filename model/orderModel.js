const db = require('./connection').db;
const mongoose = require('./connection').mongoose;

//console.log(db+"   data base  connection   "+mongoose);

const orderSchema = mongoose.Schema({
    uid: {
        type : Number,
        required: true
    },
    orderId: {
        type: Number,
        required: true
    },
    items: {
        type: [{
            item: { type: String, required: true },
            quantity: { type: Number, required: true },
            price : {type: Number, required: true}
        }]
    }
});

let orderModel = mongoose.model('orders', orderSchema);
module.exports = { orderModel };