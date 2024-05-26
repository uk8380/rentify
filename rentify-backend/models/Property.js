const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    place: { type: String, required: true },
    area: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    nearbyHospitals: { type: String },
    nearbyColleges: { type: String },
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Property', PropertySchema);
