var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var herosSchema = new Schema({
    eventName: {
        type: String,
        unique: false,
        required: true
    },
    startDate: {
        type: String,
        unique: false,
        required: true
    },
    endDate: {
        type: String,
        unique: false,
        required: true
    }
}, {
    timestamps: true
});

module.exports = herosSchema;