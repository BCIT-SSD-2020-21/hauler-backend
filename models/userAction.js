const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserActionSchema = new Schema ({
    serviceProviderId: {type: String, required: true},
    postId: {type: String, required: true},
    userAction: { type: String, required: true},
    actionPrice: { type: Number, required: true},
    userCounterOfferPrice: { type: Number, required: true},
});

module.exports = mongoose.model('UserAction', UserActionSchema);