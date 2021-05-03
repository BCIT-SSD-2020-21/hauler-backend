const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const serviceLocationSchema = new Schema({
    serviceLocation: { type: String },
    locationStatus: { type: Boolean },
})

const servicesProvidedSchema = new Schema({
    serviceProvided: { type: String },
    serviceStatus: { type: Boolean },
    serviceLocations: [serviceLocationSchema]
})

const vehicleTypeSchema = new Schema({
    vehicle: { type: String }
})

const serviceProviderProfileSchema = new Schema({
    uid: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    profilePicUrl: { type: String },
    dateOfBirth: { type: Date },
    timeStamp: { type: Date, required: true, default: Date.now },
    province: { type: String },
    city: { type: String },
    streetAddress: { type: String },
    unitNumber: { type: String },
    email: { type: String },
    contactNumber: { type: String },
    chequeDepositFormUrl: { type: String },
    vehicleType: [vehicleTypeSchema],
    driverLicenseUrl: { type: String },
    driverLicenseExpiry: { type: Date, default: Date.now },
    driverAbstractUrl: { type: String },
    profileStatus: { type: Boolean },
    serviceProvided: [servicesProvidedSchema]
})

module.exports = mongoose.model('Service Provider Profile', serviceProviderProfileSchema);