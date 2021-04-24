const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const serviceLocationSchema = new Schema ({
    serviceLocation: {type: String, required: true},
    locationStatus: {type: Boolean, required: true}, 
})

const servicesProvidedSchema = new Schema ({
    serviceProvided: {type: String, required: true},
    serviceStatus: {type: Boolean, required: true},
    serviceLocations: [serviceLocationSchema]
})

const serviceProviderProfileSchema = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    profilePicUrl: {type: String},
    dateOfBirth: {type: Date, required: true },
    province: {type: String, required: true},
    city: {type: String, required: true},
    streetAddress: {type: String, required: true },
    unitNumber: {type: String},
    email: {type: String, required: true},
    contactNumber: {type: Number, required: true},
    chequeDepositFormUrl: {type: String, required: true},
    vehicleType: {type: String, required: true},
    driverLicenseUrl: {type: String, required: true},
    driverLicenseExpiry: {type: Date, required: true},
    driverAbstractUrl: {type: String, required: true},
    profileStatus: {type: Boolean, required: true},
    serviceProvided: [servicesProvidedSchema]
})

module.exports = mongoose.model('Service Provider Profile', serviceProviderProfileSchema);