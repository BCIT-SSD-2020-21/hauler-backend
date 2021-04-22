const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const imageSchema = new Schema ({
    imageUrl: { type: String}
})

const postSchema = new Schema([
    {
        userId: { type: String, required: true },
        service: { type: String, required: true },
        itemName: { type: String, required: true },
        width: { type: String },
        height: { type: String },
        weight: { type: String },
        qty: { type: Number, required: true, default: 1 },
        images: [imageSchema],
        pickUpProvince: { type: String, required: true },
        pickUpCity: { type: String, required: true },
        pickUpStreetAddress: { type: String, required: true },
        pickUpZipCode: { type: String, required: true },
        pickUpContactPerson: { type: String, required: true },
        pickUpContactNumber: { type: String, required: true },
        pickUpSpecialInstruction: { type: String, required: true },
        dropOffProvince: { type: String, required: true },
        dropOffCity: { type: String, required: true },
        dropOffStreetAddress: { type: String, required: true },
        dropOffZipCode: { type: String, required: true },
        dropOffContactPerson: { type: String, required: true },
        dropOffContactNumber: { type: String, required: true },
        dropOffSpecialInstruction: { type: String, required: true },
        price: { type: Number, required: true, default: 50 },
        totalOffers: { type: Number, default: 0 },
        show: { type: Boolean, default: true },
        status: { type: String, required: true },
    }
]);

module.exports = mongoose.model('Post',postSchema);