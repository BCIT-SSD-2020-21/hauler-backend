const getPosts = async (req, res, next) => {
   await res.send('This works!');
};

exports.getPosts = getPosts;