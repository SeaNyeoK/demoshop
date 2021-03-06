const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let purchaseSchema = new Schema({
    bankName:{
        type:String
    },
    bankNum:{
        type:String
    },
    bankHolder:{
        type:String
    },
    orderId:{
        type:Number
    },
    orderDate:{
        type : Date, 
        default: Date.now
    },
    uid:{
        type:String,
    },
    name:{
        type:String,
    },
    price:{
        type:Number
    },
    impUid:{
        type:String
    }
});

module.exports = mongoose.model('purchase', purchaseSchema);