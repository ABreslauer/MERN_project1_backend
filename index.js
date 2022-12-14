const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use('/book', require('./routes/book.route'));
app.use('/warehouse', require('./routes/warehouse.route'));

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
connectToMongo();

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT || 8080}`);
});