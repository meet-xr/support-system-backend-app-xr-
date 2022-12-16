const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require('multer');

require("dotenv").config();

const PORT = 5000;

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Database connection Success.");
    })
    .catch((err) => {
        console.error("Mongo Connection Error", err);
    });
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //optional



app.use("/users", require("./routes/users"));
app.listen(PORT, () => {
    console.log("Server started listening on http://localhost:" + PORT);
});