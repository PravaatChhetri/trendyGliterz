// components/CartItem.js
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function CartCard({ item, setCartItems, cartItems }) {
  // Implement functions to handle quantity changes
  const [quantity, setQuantity] = useState(item.quantity);
  // const updateQuantityInCart = (productId, newQuantity) => {
  //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
  //     const itemIndex = cart.findIndex(item => item.id === productId);
  //     if (itemIndex !== -1) {
  //         cart[itemIndex].quantity = newQuantity;
  //         localStorage.setItem("cart", JSON.stringify(cart));
  //     } else {
  //         console.error("Item not found in cart");
  //     }
  // };

  const updateQuantityInCart = (productId, newQuantity) => {
    console.log('Updating quantity for product ID:', productId, 'New Quantity:', newQuantity);

    if (newQuantity < 0) {
      console.error("Invalid quantity");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = cart.findIndex((item) => item._id === productId);

    if (itemIndex !== -1) {
      cart[itemIndex].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart); // Update the cartItems state
    } else {
      console.error("Item not found in cart");
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        updateQuantityInCart(item._id, newQuantity);
        return newQuantity;
      });
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      updateQuantityInCart(item._id, newQuantity);
      return newQuantity;
    });
  };

  const removeItem = () => {
    console.log('Removing item with ID:', item._id);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((cartItem) => cartItem._id !== item._id); // filter based on unique ID
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    // Optionally, trigger a re-render or update the state if necessary
    
  };

  return (
    <div className="flex justify-between items-center border-b p-4 ">
      <div className="flex lg:w-1/4 items-center space-x-4">
        <Image
          src={item.image}
          alt={item.name}
          width={20}
          height={20}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>{item.size}</p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 lg:w-1/4">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <p className="font-bold text-right lg:w-1/4">
        Rs.{item.price * quantity}
      </p>
      <button className="lg:w-1/4" onClick={() => removeItem()}>
        ×
      </button>
    </div>
  );
}
