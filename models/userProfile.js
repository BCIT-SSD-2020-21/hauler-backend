const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userProfileSchema = new Schema ({
    firstName: {type: String},
    lastName: {type: String},
    profilePicUrl: {type: String},
    dateOfBirth: {type: Date },
    province: {type: String},
    city: {type: String},
    streetAddress: {type: String },
    unitNumber: {type: String},
    email: {type: String},
    contactNumber: {type: String},
    creditCardNumber: {type: Number},
    expiryDate: {type: Date},
    cvv: {type: Number},
    profileStatus: {type: Boolean}
})

module.exports = mongoose.model('UserRegistration', userProfileSchema);