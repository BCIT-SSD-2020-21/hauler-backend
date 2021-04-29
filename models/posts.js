const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const imageSchema = new Schema ({
    imageUrl: { type: String}
})

const postSchema = new Schema([
    {
        userId: { type: String },
        service: { type: String },
        postHeading: { type: String },
        postDescription: {type: String},
        loadWeight: {type: String},
        numberOfItems: {type: Number, default: 0},
        loadImages: [imageSchema],
        price: { type: Number, default: 50 },
        totalOffers: { type: Number, default: 0 }, //----confirm applicability?
        show: { type: Boolean, default: true },
        status: { type: String }, //---to be imported?
        pickUpProvince: { type: String },
        pickUpCity: { type: String },
        pickUpStreetAddress: { type: String },
        pickUpZipCode: { type: String },
        pickUpContactPerson: { type: String },
        pickUpContactNumber: { type: String },
        pickUpSpecialInstruction: { type: String },
        dropOffProvince: { type: String },
        dropOffCity: { type: String },
        dropOffStreetAddress: { type: String },
        dropOffZipCode: { type: String },
        dropOffContactPerson: { type: String },
        dropOffContactNumber: { type: String },
        dropOffSpecialInstruction: { type: String },
    }
]);

module.exports = mongoose.model('Post',postSchema);
