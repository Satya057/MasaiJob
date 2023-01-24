const express = require("express")
const { connection } = require("./Config/db")
require("dotenv").config()
const cors = require("cors")
const { JobRoute } = require("./Routes/jobRoutes")
const app = express()
app.use(express.json())
app.use(cors())

// app.get("/", async(req,res)=>{
//     res.send("Hello Good Morning")
// })

app.use("/job",JobRoute)

const PORT = process.env.PORT || 8080
app.listen(PORT, async ()=>{
    try{
        await connection
        console.log("Connection to DB successfull")
    }
    catch(err){
        console.log(err)
    }
    console.log(`Server is running on PORT ${PORT}`)
})