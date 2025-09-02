const mongoose = require('mongoose');

// ---------------- Product Schema ----------------
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
        enum: ['electronics', 'fashion', 'home', 'books'],
    },

    price: {
        type: Number,
        required: true,
        min: 1, // ✅ corrected "mini" → "min"
    },

    inStock: {
        type: Boolean,
        default: true,
    },

    releaseDate: {
        type: Date,
    },

    // Link reviews with Product
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        }
    ]
});

// ---------------- Review Schema ----------------
const reviewSchema = new mongoose.Schema({
    reviewerName: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },

    comment: {
        type: String,
        default: '', // optional, so default empty string
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }
});

// Models
const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = { Product, Review };
