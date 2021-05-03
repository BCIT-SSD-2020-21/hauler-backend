const ServiceProviderData = require('../models/serviceProviderProfile')

//===================================== To register service provider =================================//
const createServiceProvider = async (req, res) => {
    try {
        const {
            uid,
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
            locationStatus 
        } = req.body;

        const newServiceProvider = new ServiceProviderData({
            uid,
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
            }
        });
        await newServiceProvider.save();
        res.status(201).json({ serviceProviderProfile: newServiceProvider });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//================================ To get all service providers =====================================//
const getServiceProvider = async (req, res) => {
    try {
        const serviceProviders = await ServiceProviderData.find();
        res.status(200).json(serviceProviders)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//================================= To get One service provider =====================================//
const getOneServiceProvider = async (req, res) => {
    try {
        const id = req.params.uid;
        let serviceProvider = await ServiceProviderData.findOne({ _id: id });
        res.status(200).json(serviceProvider)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//================================= To delete service provider ======================================//
const deleteOneServiceProvider = async (req, res) => {
    try {
        const id = req.params.uid;
        await ServiceProviderData.deleteOne({ _id: id });
        res.status(200).json("Service Proviser Deleted")
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//================================ To edit servise provider profile =================================//
const updateOneServiceProvider = async (req, res) => {
    try {
        const id = req.params.uid;
        const {
            firstName,
            lastName,
            dateOfBirth,
            province,
            city,
            streetAddress,
            unitNumber,
            contactNumber,
            vehicleType
        } = req.body;
        await ServiceProviderData.findOneAndUpdate({ _id: id }, {
            $set: {
                firstName: firstName, lastName: lastName,
                dateOfBirth: dateOfBirth, province: province, city: city, streetAddress: streetAddress,
                unitNumber: unitNumber, contactNumber: contactNumber, vehicleType: vehicleType
            }
        });
        res.status(200).json("User Info updated")
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.getOneServiceProvider = getOneServiceProvider;
exports.getServiceProvider = getServiceProvider;
exports.createServiceProvider = createServiceProvider;
exports.deleteOneServiceProvider = deleteOneServiceProvider;
exports.updateOneServiceProvider = updateOneServiceProvider;


