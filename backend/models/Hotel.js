const mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema(
    {
        hname: {
            type: String,
            require: true,
            min: 3
        },
        capacity: {
            type: Number,
            require: true
        },
        lat: {
            type: Number,
            require: true
        },
        long:{
            type: Number,
            require: true
        }
    }
);

module.exports = mongoose.model('Hotel',HotelSchema);