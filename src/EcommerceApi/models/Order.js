const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema(
    {
        userId: {type:String, required:true},
        Products:[
            {
                productId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    default:1,
                },
            },
        ],  
        amount: {type:Number, require: true },
        address: { type: Object, required:true },
       /* postalCode:{ type: Number, required: true}, */
        status: {type:String , default: "pending"},
    },
    {timestamps:true}
    );

    module.exports = mongoose.model("Order", OrderSchema);