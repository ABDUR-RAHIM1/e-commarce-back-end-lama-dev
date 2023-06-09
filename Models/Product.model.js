const mongooose =  require("mongoose")

const Produuct = mongooose.Schema({
     title : {
         type : String,
         required : true, 
     },
     desc : {
        type : String,
        required : true, 
    },
    img : {
        type : String,
        required : true, 
    },
    categories : {
        type : Array, 
    },
    size : {
        type : String, 
    },
    color : {
        type : String, 
    },
    price : {
        type : Number,
        required : true, 
    },
    date : {
        type : Date,
        default : Date.now,
    },
})

const Produuct = mongooose.model("Produuct", ProduuctSchema)
module.exports = Produuct