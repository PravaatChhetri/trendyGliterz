"use client";
import React,{useRef} from "react";

function Checkout() {
  const [cartItems, setCartItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const formRef = useRef(null); // Added ref to access form

  React.useEffect(() => {
    // Retrieve items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []); // Removed cartItems from dependency array to prevent infinite loop

  React.useEffect(() => {
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
  const handleSubmit = async(event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(formRef.current); 
    // Use the ref to get form data

    
    formData.append('cartItems', JSON.stringify(cartItems)); // Append cart items as a JSON string
    try {
        const res=await fetch("http://localhost:3000/api/orders", {
            method: "POST",
            body:  formData,
        });
        console.log(res);
        if(res.status===200){
            alert("Order placed successfully");
        }
        else{
            alert("Error occured");
        }
    } catch (error) {
        console.log(error);
    }

    console.log('Form Submitted', Object.fromEntries(formData)); // For demonstration
  };


  const items = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const shipping = 0;

  return (
    <>
      <h1 className="text-center text-4xl fon-semibold my-4">Checkout</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row justify-center items-center w-[90%] mx-auto gap-5">
          <div className="">
            <h1 className="text-2xl font-semibold">Billing Address</h1>
            <hr />

            <div className="grid grid-cols-2 gap-3 my-5">
              <div>
                <label htmlFor="fname">Full Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fullname"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="John M. Doe"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="johnMdoe@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="9876543210"
                />
              </div>

              <div>
                <label htmlFor="streetadr">Street Address</label>
                <input
                  type="text"
                  id="streetadr"
                  name="streetaddress"
                  placeholder="Teen Murti Marg Area"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div>
                <label htmlFor="city">Town/City</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New Delhi"
                />
              </div>
              <div className="">
                <label htmlFor="state">State</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Delhi"
                />
              </div>
              <div className="">
                <label htmlFor="zip">Pin Code</label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="number"
                  id="zip"
                  name="zip"
                  placeholder="110011"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#365C9A] text-white rounded-md w-full lg:w-[500px] p-4 my-5">
            <h1 className="font-semibold text-2xl my-3">Your Order</h1>
            <hr />
            <div className="flex justify-evenly items-center w-full mb-3 font-semibold text-xl">
              <p>Product</p>
              <p>Price</p>
            </div>
            <hr />
            <div className="flex flex-col justify-center items-center w-full">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 w-[80%]">
                    <p className="font-semibold text-center">
                      {item.name} * {item.quantity}
                    </p>
                    <p className="text-center">
                      Rs.{item.price * item.quantity}
                    </p>
                  </div>
                ))
              ) : (
                <p className="mb-4 font-semibold text-2xl">
                  Your Cart is Empty
                </p>
              )}
              <div className="flex justify-evenly items-center w-full">
                <p className="font-bold text-2xl">Total</p>
                <p>Rs.{subtotal}</p>
              </div>
              <button type="submit" className="btn btn-light my-5 w-48 text-lg">
                Place Order
              </button>
            </div>
          </div>
      </div>
        </form>
    </>
  );
}

export default Checkout;
