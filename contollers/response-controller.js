const Response = require('../models/response')

//==================== To add Response from service provider for service provider app ================// 
const addServiceProviserResponse = async (req, res) => {
    const {
        postId,
        serviceProviderId,
        originalPrice,
        status,
        notification,
        serviceProviderActionButtons,
        serviceProviderResponse,
        serviceProviderActionPrice,
        userResponse,
        userResponsePrice,
        userActionButtons
    } = req.body;

    let existedResponse = await Response.findOne({ postId: postId, serviceProviderId: serviceProviderId })

    if (existedResponse.length > 0) {
        try {
            const updatedResponse = await Response.updateOne(
                { postId: postId, serviceProviderId: serviceProviderId }, {
                $push: {
                    serviceProviderResponseSchema: [{
                        serviceProviderResponse,
                        serviceProviderActionPrice
                    }
                    ]
                },
                $set: {
                    status: status,
                    serviceProviderActionButtons: serviceProviderActionButtons,
                    notification: notification,
                    userActionButtons: userActionButtons
                }
            }
            )
            res.status(200).json({ response: updatedResponse });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }

    }

    else {
        try {
            const newResponse = new Response({
                postId: postId,
                serviceProviderId: serviceProviderId,
                originalPrice: originalPrice,
                status: status,
                notification: notification,
                serviceProviderActionButtons: serviceProviderActionButtons,
                serviceProviderResponseSchema: [{
                    serviceProviderResponse: serviceProviderResponse,
                    serviceProviderActionPrice: serviceProviderActionPrice,
                }],
                userResponseSchema: [{
                    userResponse: userResponse,
                    userResponsePrice: userResponsePrice
                }]
            })

            await newResponse.save();
            res.status(200).json({ response: newResponse })
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
};

//========== To get all response on posts related to service provider for service provider app =======//
const getResponseByServiseProviderId = async (req, res) => {
    const servideProviderId = req.params.serviceProviderId;
    try {
        const response = await Response.findOne({ serviceProviderId: servideProviderId });
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//============================ To delete response for both apps ====================================//
const deleteResponse = async (req, res) => {
    const id = req.params.responseId;
    try {
        const id = req.params.postId;
        await Response.deleteOne({ _id: id });
        res.status(200).json("response deleted")
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//=============================== To get single response for both apps ===============================// 
const getOneResponse = async (req, res) => {
    const id = req.params.postId;
    const servideProviderId = req.params.serviceProviderId;
    try {
        const response = await Response.findOne({ postId: id, serviceProviderId: servideProviderId });
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//========================== To add response fron user for user app ==================================//
const addUserResponse = async (req, res) => {
    try {
        const { postId, serviceProviderId, userResponse, userResponsePrice, status, serviceProviderActionButtons, notification } = req.body
        const updatedResponse = await Response.updateOne(
            { postId: postId, serviceProviderId: serviceProviderId }, {
            $push: {
                userResponseSchema: [{
                    userResponse,
                    userResponsePrice
                }
                ]
            },
            $set: {
                status: status,
                serviceProviderActionButtons: serviceProviderActionButtons,
                notification: notification,
                userActionButtons: userActionButtons
            }
        }
        )
        res.status(200).json({ response: updatedResponse });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//============================ To get all response on post for user app ==============================//
const getAllResponse = async (req, res) => {
    const id = req.params.postId;
    try {
        const response = await Response.find({ postId: id });
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


//================================ testing purpose ==================================================//
const getAll = async (req, res) => {
    try {
        const response = await Response.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.addServiceProviserResponse = addServiceProviserResponse;
exports.getAllResponse = getAllResponse;
exports.addUserResponse = addUserResponse;
exports.getAll = getAll;
exports.getOneResponse = getOneResponse;
exports.deleteResponse = deleteResponse;
exports.getResponseByServiseProviderId = getResponseByServiseProviderId;