const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');

const route = require("./routes/route");
const router = express.Router();
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());




const url = "mongodb+srv://believe0256:tQbGNEiflhDEgSvP@open-to-intern-db.8buezqz.mongodb.net/Open_To_Intern?retryWrites=true&w=majority";


mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => console.log("MongoDB is Connected"))
.catch((err) => console.log(err));

app.use('/', route);


const port = 3000 || process.env.PORT;
app.listen(port, function(){
    console.log(`Express app is running on PORT ${port}`);
});