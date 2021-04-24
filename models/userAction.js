const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserResponseSchema = new Schema ({
    userResponse: { type: Boolean, required: true},
    userCounterOfferPrice: { type: Number, required: true},
})

const UserActionSchema = new Schema ({
    serviceProviderId: {type: String, required: true},
    postId: {type: String, required: true},
    userResponse: [UserResponseSchema],
});


module.exports = mongoose.model('UserAction', UserActionSchema);