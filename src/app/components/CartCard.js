// components/CartItem.js
"use client"
import React,{useEffect, useState} from 'react'
import Image from 'next/image';


export default function CartCard({ item ,setCartItems,cartItems}){
    // Implement functions to handle quantity changes
    const [quantity, setQuantity] = useState(item.quantity);
    const updateQuantityInCart = (productId, newQuantity) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = cart.findIndex(item => item.id === productId);

        if (itemIndex !== -1) {
            cart[itemIndex].quantity = newQuantity;
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            console.error("Item not found in cart");
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            updateQuantityInCart(item.id, quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        updateQuantityInCart(item.id, quantity + 1);
    };

    const removeItem = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(cartItem => cartItem.productName !== item.productName);
        setCartItems(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        // Optionally, trigger a re-render or update the state if necessary
        
    };
    

  
    return (
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center space-x-4">
          <Image src={item.image} alt={item.name} width={20} height={20} className="w-20 h-20 object-cover rounded-md" />
          <div>
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p>{item.size}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <p className="font-bold">Rs.{item.price*quantity}</p>
        <button onClick={removeItem}>×</button>
      </div>
    );
  };
  