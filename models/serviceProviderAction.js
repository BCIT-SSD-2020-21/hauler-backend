const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ServiceProviderActionSchema = new Schema ({
    serviceProviderId: {type: String, required: true},
    postId: {type: String, required: true},
    serviceProviderAction: { type: Number, required: true},
    actionPrice: { type: Number, required: true},
    serviceProviderCounterOfferPrice: { type: Number, required: true},
});

module.exports = mongoose.model('ServiceProviderAction',ServiceProviderActionSchema);