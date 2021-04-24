const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ServiceProviderResponseSchema = new Schema ({
    serviceProviderResponse: { type: Boolean, required: true},
    serviceProviderCounterOfferPrice: { type: Number, required: true},
});


const ServiceProviderActionSchema = new Schema ({
    postId: {type: String, required: true},
    serviceProviderResponse: [ServiceProviderResponseSchema]
});

module.exports = mongoose.model('ServiceProviderAction',ServiceProviderActionSchema);