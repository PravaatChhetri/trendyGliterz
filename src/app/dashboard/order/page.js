"use client";
import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

export default function Orders() {
  const [order, setOrder] = React.useState([{}]);
  const [isLoading, setIsLoading] = React.useState(true);
  // Retrieve items from localStorage
  React.useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((order) => {
        setOrder(order);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Removed cartItems from dependency array to prevent infinite loop

  return (
  <div className="w-full flex items-start p-3">
{isLoading && (
    <div className="flex items-center justify-center w-[80%] bg-[#fff] h-screen absolute z-[1000]">
      <AiOutlineLoading3Quarters className="animate-spin h-20 w-20 font-extrabold text-blue-500" />
    </div>
  )}
  <div className="overflow-x-auto h-[90vh] overflow-y-scroll">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Orders</th>
          <th>Total Price</th>
          <th>Address</th>
          <th>Pin Code</th>
          <th>Contacts</th>
        </tr>
      </thead>
      <tbody>
        {order.map((order, index) => {
          return (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar flex justify-center items-center">
                    <div className="mask mask-squircle p-2 bg-[#ccc]">
                      <p className="font-bold text-2xl text-center h-full">
                        {order?.fullname?.split(" ").length>1 ?(order?.fullname?.split(" ")[0][0]+order?.fullname?.split(" ")[1][0] ):order?.fullname?.split(" ")[0][0]}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{order.fullname}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col items-start gap-3">
                  <CartItems items={order.cartItems} />
                </div>
              </td>
              <td>
              Rs.{order?.cartItems?.reduce( (acc, item) => acc + parseInt(item.price) * item.quantity, 0)}
              </td>
              <td>
                <div className="flex flex-col items-start gap-3">
                  <span className="badge badge-outline badge-sm">
                    {order.streetaddress}
                  </span>
                  <span className="badge badge-outline badge-sm">
                    {order.city}
                  </span>
                  <span className="badge badge-outline badge-sm">
                    {order.state}
                  </span>
                </div>
              </td>
              <th>
                <span className="text-lg">{order.zip}</span>
              </th>
              <th>
              
                <div className="flex items-start gap-3">
                  <Link href={`mailto:${String(order?.email)}`}>
                    <MdAttachEmail className="h-6 w-6" />
                  </Link>
                  <Link href={`https://wa.me/${String(order?.phone)}`}>
                    <FaPhoneAlt className="h-4 w-4" />
                  </Link>
                </div>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>

  );
}

const CartItems = ({ items }) => {
  return (
    <>
      {items?.map((item, index) => {
        return (
          <span key={index} className="badge badge-ghost badge-sm">
            {item.name} x {item.quantity}
          </span>
        );
      })}
    </>
  );
};
