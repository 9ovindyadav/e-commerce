const express = require("express");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const connectDB = require("./db/connect");
const app = express();

require("dotenv").config();
require("express-async-errors");

//middlewares
app.use(express.json());

app.use(notFound);
app.use(errorHandlerMiddleware);


app.get("/",(req,res)=>{
    res.status(200).send("<h1>Server is Live</h1>")
})

const port = process.env.PORT || 3000 ;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is listening on port: ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start();