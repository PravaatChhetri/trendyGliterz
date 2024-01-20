"use client";
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartCard";
import { BsCartXFill } from "react-icons/bs";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

// Add other necessary imports

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

 

  useEffect(() => {
    // Retrieve items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []); // Removed cartItems from dependency array to prevent infinite loop
  
  useEffect(() => {
    // Update total when cartItems changes
    const newTotal = cartItems.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  // Functions to calculate subtotal and total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseInt(item.price) * item.quantity,
    0
  );
  const items = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const shipping = 0; // or calculate based on items
  // const total = subtotal + shipping;

  // Define handlers for checkout and payment method changes

  return (
    <div className="container mx-auto p-5 min-h-[45vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2">
          {/* Cart Items List */}
          <h2 className="text-2xl font-bold mb-5">Shopping Cart.</h2>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-center">Product</h1>
            <h1 className="font-semibold text-left pl-20">Quantity</h1>
            <h1 className="font-semibold text-left pl-5">Total Price</h1>
            <h1 className="font-semibold text-left pl-5">{"     "}</h1>
          </div>
          <hr />
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                setCartItems={setCartItems} 
                cartItems={cartItems}
              />
            ))
          ) : (
            <div className=" flex justify-center items-center w-full h-full">
              <p className="text-3xl font-bold flex items-center gap-3 ">
                <BsCartXFill className="text-[#408cd3] text-8xl" />
                Your Cart is Empty
              </p>
            </div>
          )}

          {cartItems.length > 0 && (
            <div>
              <hr />
              <div className="flex justify-between items-center my-5">
                <h1 className="text-2xl font-bold">
                  Subtotal{" "}
                  <span className="text-xl font-light">
                    {"( Total Items " + items + " )"}
                  </span>
                </h1>
                <p className="text-2xl font-bold">Rs.{subtotal}</p>
              </div>
            </div>
          )}

          {/* Continue Shopping Link */}
        </div>

        <div className="col-span-1 rounded-lg shadow-md flex flex-col justify-center items-center mx-auto ">
          {/* Payment Info Component */}
          {/* Summary Component */}
          <div>
            <h1 className="text-4xl font-extrabold text-center mt-5">
              Grand Total
            </h1>
            <div className="flex justify-center items-center mt-5">
              <h1 className="text-left text-2xl font-bold ">
                Subtotal{"  "}
                <span className="text-xl font-light">
                  {"( Total Items " + items + " )"}
                </span>
              </h1>
            </div>
            <h1 className="text-center text-xl font-bold">
              Shipping {shipping}
            </h1>
            <p className="text-center my-5 text-3xl font-bold">Rs.{total}</p>
          </div>
          <div className="mb-5">
            <Image
              src="/assets/images/gpay.jpeg"
              width="300"
              height="300"
              alt="GPay"
            />
            <span className="font-semibold text-lg flex items-center gap-3">
            <MdAccountBalanceWallet className="text-2xl"/>  Trendy Gliterz
            </span>
            <p className="font-semibold text-md flex items-center gap-3 ml-1 mt-2"><FaPhone className="text-xl" />+91 9876543210</p>
            <div className="my-5">
              <Link href="/checkout">
              <button className="btn btn-neutral text-lg w-[90%] mx-auto">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
