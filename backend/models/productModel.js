const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Enter product Name"],
        trim: true,
    },
    description: {
        type: String,
        require: [true, "Please Enter product Description"],
    },
    price: {
        type: Number,
        require: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
    },
    rating: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                require: true,
            },
            url: {
                type: String,
                require: true,
            },
        },
    ],
    categories: {
        type: String,
        require: [true, "Please Enter product Categories"],
    },
    stock: {
        type: Number,
        require: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            name: {
                type: String,
                require: true,
            },
            rating: {
                type: Number,
                require: true,
            },
            rating: {
                type: String,
                require: true,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);
