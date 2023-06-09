const mongooose =  require("mongoose")

const UserSchema = mongooose.Schema({
     username : {
         type : String,
         required : true,
         unique : true
     },
     email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true, 
    },
    isAdmin : {
      type :Boolean,
      default :false, 
    },
    date : {
        type : Date,
        default : Date.now,
    },
})

const User = mongooose.model("User", UserSchema)
module.exports = User