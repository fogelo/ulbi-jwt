require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const router = require("./router/index")

const PORT = process.env.PORT || 5001
const app = express()

//подключаем middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api", router)

const start = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/appdb", {
            useNewUrlParser: true
        })

        app.listen(PORT, () => console.log(`server started on PORT = ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()
