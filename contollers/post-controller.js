const PostData = require('../models/posts.js')

const getPosts = async (req, res) => {
   try {
        const posts = await PostData.find();
        res.status(200).json(posts)
   } catch (error) {
    res.status(404).json({ message: error.message });
   }
};

const createPost = async (req, res) => {
    const postMessage = req.body;
    const newPost = new PostData(postMessage);

    try {
            await newPost.save()
            res.status(201).json(newPost);
        } catch (error) {
            res.status(409).json({ message: error.message });
    }
}

exports.getPosts = getPosts;
exports.createPost = createPost;