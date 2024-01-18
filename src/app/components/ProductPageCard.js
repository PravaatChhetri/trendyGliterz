// components/ProductCard.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { set } from "mongoose";

export default function ProductPageCard({ product, setShowAlert }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    // Add product with quantity to localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ensure quantity is a number and greater than 0
    const validQuantity = Math.max(1, parseInt(quantity, 10));

    // Check if product already exists in the cart
    const existingProductIndex = cart.findIndex((p) => p.name === product.name);

    if (existingProductIndex >= 0) {
      // Update quantity if product exists
      cart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + validQuantity }
          : item
      );
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      // Add new product with quantity
      cart.push({ ...product, quantity: validQuantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleQuantity = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) {
      setQuantity(val);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="card rounded-md overflow-hidden hover:shadow-lg flex flex-col justify-center items-center w-fit">
        <Image
          src={product.image}
          height={300}
          width={300}
          alt={product.name}
          className=" h-[300px] object-cover rounded-md"
        />
        <div className="flex justify-between items-center w-full my-2 p-2">
          <div>
            <h3>{product.name}</h3>
            <p className="font-semibold">Rs.{product.price}</p>
          </div>
          <input
            className="border-[1.5px] rounded-lg p-2 border-black w-[70px]"
            name="quantity"
            type="number"
            min="0"
            defaultValue="0"
            onChange={handleQuantity}
          />
        </div>
        <button className="btn btn-neutral w-full" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
