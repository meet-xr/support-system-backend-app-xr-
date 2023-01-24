const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();


require("dotenv").config();

const PORT = 8092;

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Database connection Successfully.....");
    })
    .catch((err) => {
        console.error("Mongo Connection Error", err);
    });
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //optional
app.set("view engine", "ejs");



app.use("/users", require("./routes/users"));
app.listen(PORT, () => {
    console.log("Server started listening on http://localhost:" + PORT);
});


