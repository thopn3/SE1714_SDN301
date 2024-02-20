import mongoose, { Schema } from "mongoose";

// Create a schema for Product object
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        unique: [true, 'Product name is not duplicate']
    },
    price:{
        type: Number,
        required: true,
        min: [0, 'Price must be greater than or equals to zero']
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

// Mapping to Collection
const Products = mongoose.model("products", productSchema);

export default Products;