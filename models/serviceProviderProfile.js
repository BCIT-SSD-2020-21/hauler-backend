const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const serviceLocationSchema = new Schema ({
    serviceLocation: {type: String},
    locationStatus: {type: Boolean}, 
})

const servicesProvidedSchema = new Schema ({
    serviceProvided: {type: String},
    serviceStatus: {type: Boolean},
    serviceLocations: [serviceLocationSchema]
})

const serviceProviderProfileSchema = new Schema ({
    firstName: {type: String},
    lastName: {type: String},
    profilePicUrl: {type: String},
    dateOfBirth: {type: Date},
    province: {type: String},
    city: {type: String},
    streetAddress: {type: String },
    unitNumber: {type: String},
    email: {type: String},
    contactNumber: {type: Number},
    chequeDepositFormUrl: {type: String},
    vehicleType: {type: String},
    driverLicenseUrl: {type: String},
    driverLicenseExpiry: {type: Date},
    driverAbstractUrl: {type: String},
    profileStatus: {type: Boolean},
    serviceProvided: [servicesProvidedSchema]
})

module.exports = mongoose.model('Service Provider Profile', serviceProviderProfileSchema);