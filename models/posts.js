const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageUrl: { type: String, required: true, default: 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg' }
})

const postSchema = new Schema([
    {
        userId: { type: String, required: true },
        service: { type: String, required: true },
        postHeading: { type: String, required: true },
        postDescription: { type: String },
        loadWeight: { type: String },
        numberOfItems: { type: Number },
        loadImages: [imageSchema],
        price: { type: Number, default: 50 },
        timeStamp: { type: Date, required: true, default: Date.now },
        totalOffers: { type: Number, default: 0 }, //----confirm applicability?
        show: { type: Boolean, default: true },
        status: { type: String }, //---to be imported?
        pickUpProvince: { type: String, required: true },
        pickUpCity: { type: String, required: true },
        pickUpStreetAddress: { type: String, required: true },
        pickUpZipCode: { type: String, required: true },
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

module.exports = mongoose.model('Post', postSchema);
