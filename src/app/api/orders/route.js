import connectMongoDB from "@/libs/mongodb";
import Order from "@/models/order";
import { NextResponse } from "next/server";
import mongoose from 'mongoose';
export async function POST(request) {
    try {
        const data = await request.formData();
        
        const cartItemsJSON = data.get('cartItems');
        const city = data.get('city');
        const email = data.get('email');
        const fullname = data.get('fullname');
        const phone = data.get('phone');
        const state = data.get('state');
        const streetaddress = data.get('streetaddress');
        const zip = data.get('zip');

        // Parse the cartItems JSON string
        const cartItems = JSON.parse(cartItemsJSON);

        // Convert the _id field from string to mongoose ObjectId
        for (const item of cartItems) {
            item._id = new mongoose.Types.ObjectId(item._id);
        }

        await connectMongoDB();

        const newOrder = await Order.create({
            fullname,
            email,
            phone,
            streetaddress,
            city,
            state,
            zip,
            cartItems
        });

        return NextResponse.json({ message: 'Order placed successfully', status: 201 });

    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: 'Error creating order', status: 500 });
    }
}

export async function GET() {
    await connectMongoDB();
    const orders = await Order.find();
    return NextResponse.json(orders) ;
  }