const express = require("express");
const  mongoose = require("mongoose");
const dotenv = require("dotenv");  
dotenv.config()
const authRouter = require("./routes/auth.route"); 
const userRouter = require("./routes/user.route.");
const app = express() 
app.use(express.json()) 

//  router midddlewere
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)

const PORT = process.env.PORT || 5000
mongoose.connect(
     process.env.MONGO_URL
).then(() => console.log("Database is Connected"))
    .catch((err) => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Server Is Running On Port : http://localhost:${PORT}`)
})
