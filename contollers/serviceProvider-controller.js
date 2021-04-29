const ServiceProviderData = require('../models/serviceProviderProfile')


const getServiceProvider = async (req, res) => {
   try {
        const serviceProviders = await ServiceProviderData.find();
        res.status(200).json(serviceProviders)
   } catch (error) {
    res.status(404).json({ message: error.message });
   }
};

const createServiceProvider = async (req, res) => {
    const { 
        firstName,
        lastName,
        profilePicUrl,
        dateOfBirth,
        province,
        city,
        streetAddress,
        unitNumber,
        email,
        contactNumber,
        chequeDepositFormUrl,
        vehicleType,
        driverLicenseUrl,
        driverLicenseExpiry,
        driverAbstractUrl,
        profileStatus,
        serviceProvided,
        serviceStatus,
        serviceLocation,
        locationStatus } = req.body;

    const newServiceProvider = new ServiceProviderData({
        firstName,
        lastName,
        profilePicUrl,
        dateOfBirth,
        province,
        city,
        streetAddress,
        unitNumber,
        email,
        contactNumber,
        chequeDepositFormUrl,
        vehicleType,
        driverLicenseUrl,
        driverLicenseExpiry,
        driverAbstractUrl,
        profileStatus,
        serviceProvided: {
            serviceProvided,
            serviceStatus,
        },  
        serviceLocations: {
            serviceLocation,
            locationStatus,
        } });

        await newServiceProvider.save();
        res.status(201).json({serviceProviderProfile: newServiceProvider});
  
    }


exports.getServiceProvider = getServiceProvider;
exports.createServiceProvider = createServiceProvider;

