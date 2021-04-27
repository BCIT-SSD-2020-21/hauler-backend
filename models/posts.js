const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const imageSchema = new Schema ({
    imageUrl: { type: String}
})

const postSchema = new Schema([
    {
        userId: { type: String, required: true },
        service: { type: String, required: true },
        postHeading: { type: String },
        postDescription: {type: String},
        loadWeight: {type: String},
        numberOfItems: {type: String},
        loadImages: [imageSchema],
        price: { type: Number, required: true, default: 50 },
        totalOffers: { type: Number, default: 0 }, //----confirm applicability?
        show: { type: Boolean, default: true },
        status: { type: String, required: true }, //---to be imported?
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
    }
]);

module.exports = mongoose.model('Post',postSchema);
