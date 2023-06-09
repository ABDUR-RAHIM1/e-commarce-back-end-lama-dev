const mongooose = require("mongoose")

const OrderSchema = mongooose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: [
        {
            productId: {
                type: String,
            },
            quanitity: {
                type: String,
                default: 1
            }
        }
    ],
    ammount: {
        type : Number,
        required : true
    },
    address : {
        type : Object,
        required : true
    },
    status : {
        type : String,
        default : "pending",
    }


})

const Order = mongooose.model("Order", OrderSchema)
module.exports = Order