const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true,
    },
    arrival: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true,
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true,
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
        required: true,
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
    },
    departs: {
        type: Date,
        default: () => new Date().setFullYear(new Date().getFullYear() + 1),
        required: true,
    },
    destinations: [destinationSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);