import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data =
    await request.formData();
    const name=data.get("name");
    const price=parseFloat(data.get("price"));
    const description=data.get("description");
    const image=data.get("image");
    const quantity=parseInt(data.get("quantity"));
    const category=data.get("category");
    
    console.log(name, price, description, image, quantity, category);
  await connectMongoDB();
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      name,
      price,
      description,
      image,
      quantity,
      category,
    },
    { new: true }
  );
  return NextResponse.json(
    {
      message: updatedProduct,
    },
    { status: 200 }
  );
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({
    message: `Product deleted successfully`,
    status: 201,
  });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findById(id);
  return NextResponse.json(product);
}
