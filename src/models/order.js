import mongoose, { Schema } from 'mongoose';

const cartItemSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    description: String,
    image: String,
    quantity: Number,
    category: String,
    quantitySold: Number,
    createdAt: Date,
    updatedAt: Date,
});

// Schema for the user and their cart
const OrderSchema = new Schema(
    {fullname: String,
    email:String,
    phone: String,
    streetaddress: String,
    city: String,
    state: String,
    zip: String,
    cartItems: [cartItemSchema]}, // An array of cart items
    { timestamps: true }
);

// Compile model from schema

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);


