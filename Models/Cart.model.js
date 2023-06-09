const mongooose = require("mongoose")

const CartSchema = mongooose.Schema({
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


})

const Cart = mongooose.model("Cart", CartSchema)
module.exports = Cart