const PostData = require('../models/posts')

const getPosts = async (req, res) => {
   try {
        const posts = await PostData.find();
        res.status(200).json(posts)
   } catch (error) {
    res.status(404).json({ message: error.message });
   }
};

const createPost = async (req, res) => {
    const {userId,
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
           dropOffSpecialInstructions} = req.body;

    const newPost = new PostData({
        userId,
        service,
        PostHeading,
        postDescription,
        loadWeight,
        numberOfItems,
        loadImages: [{imageUrl}],
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
        dropOffSpecialInstructions});

        await newPost.save();
        res.status(201).json({posts: newPost});
  
    }

exports.getPosts = getPosts;
exports.createPost = createPost;