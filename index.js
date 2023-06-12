const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');
// const AWS = require('aws-sdk');
const route = require("./routes/route");
const router = express.Router();
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());

// // AWS S3 setup
// const s3 = new AWS.S3();


const url = "mongodb+srv://believe0256:gGxesno7rSWDZUCg@open-to-intern.nubc3pj.mongodb.net/open-to-intern?retryWrites=true&w=majority";


mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => console.log("MongoDB is Connected"))
.catch((err) => console.log(err));

app.use('/', route);


const port = 3000 || process.env.PORT;
app.listen(port, function(){
    console.log(`Express app is running on PORT ${port}`);
});