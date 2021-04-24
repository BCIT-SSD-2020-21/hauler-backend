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
        status: { type: String, required: true },
    }
]);

const pickSchema = new Schema([
    {
        contactPerson: { type: String, required: true },
        contactNumber: { type: String, required: true },
        province: { type: String, required: true },
        city: { type: String, required: true },
        streetAddress: { type: String, required: true },
        unitNumber: { type: String},
        zipCode: { type: String, required: true },
        specialInstruction: { type: String, required: true }
    }
]);

const dropSchema = new Schema([
    {
        contactPerson: { type: String, required: true },
        contactNumber: { type: String, required: true },
        province: { type: String, required: true },
        city: { type: String, required: true },
        streetAddress: { type: String, required: true },
        unitNumber: { type: String},
        zipCode: { type: String, required: true },
        specialInstruction: { type: String, required: true }
    }
]);

module.exports = mongoose.model('Post',postSchema);
module.exports = mongoose.model('Pick up',pickSchema);
module.exports = mongoose.model('Drop off',dropSchema);