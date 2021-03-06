const UserData = require('../models/userProfile.js')

//================================== To register new user =========================================//
const createUser = async (req, res) => {
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
            cardHolderName,
            creditCardNumber,
            expiryDate,
            cvv 
        } = req.body;

        const newUser = new UserData({
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
            cardHolderName,
            creditCardNumber,
            expiryDate,
            cvv
        });

        await newUser.save();
        res.status(201).json({ userProfile: newUser });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//==================================== Get All users ================================================//
const getUser = async (req, res) => {
    try {
        const users = await UserData.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//===================================== Get One user ================================================//
const getOneUser = async (req, res) => {
    try {
        const id = req.params.uid;
        let user = await UserData.findOne({ uid: id });
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//====================================== Delete One User =============================================//
const deleteOneUser = async (req, res) => {
    try {
        const id = req.params.uid;
        await UserData.deleteOne({ uid: id });
        res.status(200).json("user deleted")
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//=============================== Edit user Profile =================================================//
const updateOneUser = async (req, res) => {
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
            contactNumber
        } = req.body;
        await UserData.findOneAndUpdate({uid: id }, { $set: { firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, province: province, city: city, streetAddress: streetAddress, unitNumber: unitNumber, contactNumber: contactNumber } });
        res.status(200).json("User Info updated")
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.getOneUser = getOneUser;
exports.getUser = getUser;
exports.createUser = createUser;
exports.deleteOneUser = deleteOneUser;
exports.updateOneUser = updateOneUser;

