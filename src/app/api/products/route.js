import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
    try {
        const data = await request.formData();
        const imageFile = data.get('image');
        const name = data.get('name');
        const price = parseFloat(data.get('price')); // Parse as float
        const description = data.get('description');
        const quantity = parseInt(data.get('quantity'), 10); // Parse as integer
        const category = data.get('category');

        if (!imageFile || typeof imageFile !== 'object') {
            return NextResponse.json({ error: 'Image is required', status: 400 });
        }

        // Validate other inputs here as needed

        const byteData = await imageFile.arrayBuffer();
        const buffer = Buffer.from(byteData);

        const imageFileName = `${Date.now().toString()}${path.extname(imageFile.name)}`;
        // Construct a path relative to the project root
        const imagesDir = path.join(process.cwd(), 'public/assets/images/products');
        const imagePath = path.join(imagesDir, imageFileName);

        // Ensure the directory exists
        

        const quantitySold = 0;
        await connectMongoDB();

        const newProduct = await Product.create({
            name,
            price,
            description,
            image: path.join("/assets/images/products", imageFileName),
            quantity,
            category,
            quantitySold
        });
        await mkdir(imagesDir, { recursive: true });
        await writeFile(imagePath, buffer);
        return NextResponse.json({ message: `${name} added successfully`, status: 201 });

    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.json({ error: 'Error creating product', status: 500 });
    }
}



export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json(products);
}
