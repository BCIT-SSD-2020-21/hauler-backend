const PostData = require('../models/posts')

//================================ Create new post on user app =====================================//
const createPost = async (req, res) => {
    try {
        const {
            userId,
            service,
            postHeading,
            postDescription,
            loadWeight,
            numberOfItems,
            imageUrl,
            price,
            totalOffers,
            status,
            pickUpProvince,
            pickUpCity,
            pickUpStreetAddress,
            pickUpZipCode,
            pickUpContactPerson,
            pickUpContactNumber,
            pickUpSpecialInstruction,
            dropOffProvince,
            dropOffCity,
            dropOffStreetAddress,
            dropOffZipCode,
            dropOffContactPerson,
            dropOffContactNumber,
            dropOffSpecialInstructions,
            serviceProviderId,
            originalPrice,
            responseStatus,
            notificationOnServiceProvider,
            notificationOnUser,
            serviceProviderActionButtons,
            userActionButtons,
            serviceProviderResponse,
            serviceProviderActionPrice,
            userResponse,
            userResponsePrice,
        } = req.body;

        const newPost = new PostData({
            userId,
            service,
            postHeading,
            postDescription,
            loadWeight,
            numberOfItems,
            loadImages: [
                { imageUrl }
            ],
            price,
            totalOffers,
            status,
            pickUpProvince,
            pickUpCity,
            pickUpStreetAddress,
            pickUpZipCode,
            pickUpContactPerson,
            pickUpContactNumber,
            pickUpSpecialInstruction,
            dropOffProvince,
            dropOffCity,
            dropOffStreetAddress,
            dropOffZipCode,
            dropOffContactPerson,
            dropOffContactNumber,
            dropOffSpecialInstructions,
            response: [{
                serviceProviderId,
                originalPrice,
                responseStatus,
                notificationOnServiceProvider,
                notificationOnUser,
                serviceProviderActionButtons,
                userActionButtons,
                serviceProviderResponseSchema: [{
                    serviceProviderResponse,
                    serviceProviderActionPrice
                }],
                userResponseSchema: [{
                    userResponse,
                    userResponsePrice
                }]
            }]
        });
        await newPost.save();
        res.status(201).json({ posts: newPost });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//=========================== To get all posts posted by user on user app ==========================//
const getPostsByUid = async (req, res) => {
    const id = req.params.uid;
    try {
        const posts = await PostData.find({ userId: id });
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//========================== To get user's posts by location on user app ===========================//
const getPostsByIdAndLocation = async (req, res) => {
    const id = req.params.uid;
    const location = req.params.location;
    try {
        const posts = await PostData.find({ userId: id, pickUpCity: location });
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//========================= To get user's posts by service on user app ==============================//
const getPostsByIdAndService = async (req, res) => {
    const id = req.params.uid;
    const service = req.params.service;
    try {
        const posts = await PostData.find({ userId: id, service: service });
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//================================= Delete post on user app =========================================// 
const deleteOnePost = async (req, res) => {
    try {
        const id = req.params.postId;
        await PostData.deleteOne({ _id: id });
        res.status(200).json("post deleted")
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//==================================== Edit post on user app ========================================//
const updateOnePost = async (req, res) => {
    try {
        const id = req.params.postId;
        const {
            service,
            PostHeading,
            postDescription,
            loadWeight,
            numberOfItems,
            imageUrl,
            price,
            totalOffers,
            status,
            pickUpProvince,
            pickUpCity,
            pickUpStreetAddress,
            pickUpZipCode,
            pickUpContactPerson,
            pickUpContactNumber,
            pickUpSpecialInstruction,
            dropOffProvince,
            dropOffCity,
            dropOffStreetAddress,
            dropOffZipCode,
            dropOffContactPerson,
            dropOffContactNumber,
            dropOffSpecialInstructions
        } = req.body;
        await PostData.findOneAndUpdate({ _id: id },
            {
                $set: {
                    service: service,
                    PostHeading: PostHeading,
                    postDescription: postDescription,
                    loadWeight: loadWeight,
                    numberOfItems: numberOfItems,
                    imageUrl: imageUrl,
                    price: price,
                    totalOffers: totalOffers,
                    status: status,
                    pickUpProvince: pickUpProvince,
                    pickUpCity: pickUpCity,
                    pickUpStreetAddress: pickUpStreetAddress,
                    pickUpZipCode: pickUpZipCode,
                    pickUpContactPerson: pickUpContactPerson,
                    pickUpContactNumber: pickUpContactNumber,
                    pickUpSpecialInstruction: pickUpSpecialInstruction,
                    dropOffProvince: dropOffProvince,
                    dropOffCity: dropOffCity,
                    dropOffStreetAddress: dropOffStreetAddress,
                    dropOffZipCode: dropOffZipCode,
                    dropOffContactPerson: dropOffContactPerson,
                    dropOffContactNumber: dropOffContactNumber,
                    dropOffSpecialInstructions: dropOffSpecialInstructions
                }
            });
        res.status(200).json('Post updated')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//================================ To change post visibilty on both apps =============================//
const updatePostVisibility = async (req, res) => {
    try {
        const id = req.params.postId;
        const {
            show
        } = req.body;
        await PostData.findOneAndUpdate({ _id: id },
            {
                $set: {
                    show: show
                }
            });
        res.status(200).json('Visibility updated')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//============================= To get single post by post Id on both apps ==========================//
const getOnePost = async (req, res) => {
    const postId = req.params.postId;
    try {
        const post = await PostData.findOne({ _id: postId });
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//======================== To get all Active posts on service provider app ==========================//
const getAllPosts = async (req, res) => {
    try {
        const posts = await PostData.find({ show: true });
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//======================= To get Active posts by location on service provider app ====================//
const getPostsByLocation = async (req, res) => {
    const location = req.params.location;
    try {
        const posts = await PostData.find({ show: true, pickUpCity: location });
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//======================= To get Active Jobs by service on service provider app ======================//
const getPostsByService = async (req, res) => {
    const service = req.params.service;
    try {
        const posts = await PostData.find({ show: true, service: service });
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//====================== To get post by postId and service on service provider app ==================//
// const getPostsByPostIdAndService = async (req, res) => {
//     const id = req.params.postId;
//     const service = req.params.service;
//     try {
//         const posts = await PostData.findOne({ _id: id, service: service });
//         res.status(200).json(posts)
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

//====================== To get post by postId and location on service provider app ================//
// const getPostsByPostIdAndLocation = async (req, res) => {
//     const id = req.params.postId;
//     const location = req.params.location;
//     try {
//         const posts = await PostData.findOne({ _id: id, pickUpCity: location });
//         res.status(200).json(posts)
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

//==================== To add service provider response on service provider app ======================//
const addServiceProviserResponse = async (req, res) => {
    const {
        postId,
        serviceProviderId,
        originalPrice,
        responseStatus,
        // notificationOnServiceProvider,
        // notificationOnUser,
        serviceProviderActionButtons,
        serviceProviderResponse,
        serviceProviderActionPrice,
        userActionButtons
    } = req.body;

    let existedResponse = await PostData.aggregate([
        { $match: { _id: ObjectId(postId), } },
        { $unwind: "$response" },
        { $replaceRoot: { newRoot: "$response" } },
        { $match: { serviceProviderId: serviceProviderId } },
    ]);

    if (existedResponse.length > 0) {
        try {
            const updatedResponse = await PostData.updateOne(
                { _id: postId, 'response.serviceProviderId': serviceProviderId }, {
                $push: {
                    'response.$.serviceProviderResponseSchema': [{
                        serviceProviderResponse,
                        serviceProviderActionPrice
                    }
                    ]
                },
                $set: {
                    'response.$.responseStatus': responseStatus,
                    'response.$.serviceProviderActionButtons': serviceProviderActionButtons,
                    'response.$.notificationOnServiceProvider': 'none',
                    'response.$.notificationOnUser': 'flex',
                    'response.$.userActionButtons': userActionButtons
                }
            }
            )
            res.status(200).json(updatedResponse);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    else {
        try {
            const newResponse = await PostData.updateOne({ _id: postId },
                {
                    $push: {
                        response:
                            [{
                                serviceProviderId: serviceProviderId,
                                originalPrice: originalPrice,
                                responseStatus: responseStatus,
                                notificationOnServiceProvider: 'none',
                                notificationOnUser: 'flex',
                                serviceProviderActionButtons: serviceProviderActionButtons,
                                userActionButtons: userActionButtons,
                                serviceProviderResponseSchema: [{
                                    serviceProviderResponse: serviceProviderResponse,
                                    serviceProviderActionPrice: serviceProviderActionPrice,
                                }],
                            }]
                    }
                })
            res.status(200).json(newResponse)
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
};

//===================================================================================================//
exports.getAllPosts = getAllPosts;
exports.getPostsByUid = getPostsByUid;
exports.getOnePost = getOnePost;
exports.createPost = createPost;
exports.deleteOnePost = deleteOnePost;
exports.updateOnePost = updateOnePost;
exports.updatePostVisibility = updatePostVisibility;
exports.getPostsByService = getPostsByService;
exports.getPostsByLocation = getPostsByLocation;
exports.getPostsByIdAndService = getPostsByIdAndService;
exports.getPostsByIdAndLocation = getPostsByIdAndLocation;
// exports.getPostsByPostIdAndService = getPostsByPostIdAndService;
// exports.getPostsByPostIdAndLocation = getPostsByPostIdAndLocation;
exports.addServiceProviserResponse = addServiceProviserResponse;

