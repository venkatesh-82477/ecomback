const express = require("express")
const product = require("./Page/Product")
const app = express()
const cors = require("cors")




app.use(cors());
app.use("/", product)

app.listen(7070,function(){
    console.log("App is running at port : 7070");
})