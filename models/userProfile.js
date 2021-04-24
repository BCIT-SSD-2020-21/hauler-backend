const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userProfileSchema = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    profilePicUrl: {type: String},
    dateOfBirth: {type: Date, required: true },
    province: {type: String, required: true},
    city: {type: String, required: true},
    streetAddress: {type: String, required: true },
    unitNumber: {type: String},
    email: {type: String, required: true},
    contactNumber: {type: String, required: true},
    creditCardNumber: {type: Number, required: true},
    expiryDate: {type: Date, required: true},
    cvv: {type: Number, required: true},
    profileStatus: {type: Boolean, required: true}
})

module.exports = mongoose.model('UserRegistration', userProfileSchema);