const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const serviceProviderResponseSchema = new Schema({
    serviceProviderResponse: { type: String },
    serviceProviderActionPrice: { type: Number },
    timeStamp: {type: Date, default: Date.now}
})

const userResponseSchema = new Schema({
    userResponse: { type: String },
    userResponsePrice: { type: Number },
    timeStamp: {type: Date, default: Date.now}
})

const responseSchema = new Schema([
    {
        postId: { type: String, required: true },
        serviceProviderId: { type: String, required: true },
        originalPrice: { type: Number, required: true },
        status: { type: String, required: true },
        notification: { type: String, required: true },
        serviceProviderActionButtons: { type: Boolean, required: true, default: false },
        userActionButtons: { type: Boolean, required: true, default: true },
        serviceProviderResponseSchema: [serviceProviderResponseSchema],
        userResponseSchema: [userResponseSchema]
    }
]);

module.exports = mongoose.model('Response', responseSchema);
