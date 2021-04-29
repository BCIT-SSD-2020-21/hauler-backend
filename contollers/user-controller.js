const UserData = require('../models/userProfile.js')


const getUser = async (req, res) => {
   try {
        const users = await UserData.find();
        res.status(200).json(users)
   } catch (error) {
    res.status(404).json({ message: error.message });
   }
};

const createUser = async (req, res) => {
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
        creditCardNumber,
        expiryDate,
        cvv,
        profileStatus } = req.body;

    const newUser = new UserData({
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
        creditCardNumber,
        expiryDate,
        cvv,
        profileStatus });

        await newUser.save();
        res.status(201).json({userProfile: newUser});
  
    }


exports.getUser = getUser;
exports.createUser = createUser;

