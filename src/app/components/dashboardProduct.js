import React from "react";
import Image from "next/image";
import { MdEditDocument } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { CgMoreVertical } from "react-icons/cg";

function Product({ setData, setProducts, setType, item }) {
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        alert("Product deleted successfully");
      } else {
        alert("Error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center w-[90%] lg:w-full  border-[1px] border-[#000] p-4 rounded-lg">
      <Image
        src={item.image}
        alt="photo"
        width={20}
        height={20}
        className="w-20 h-20 object-cover rounded-md "
      />
      <p>{item.name}</p>
      <p>Rs. {item.price}</p>
      <p>{item.quantity} pieces</p>
      <div className="flex gap-2">
        <p
          className="text-2xl text-cyan-600"
          onClick={() => {
            setType("Update Product");
            setData(item);
            setProducts(true);
          }}
        >
          <MdEditDocument />
        </p>
        <p
          className="text-2xl text-red-700"
          onClick={() => {
            handleDelete(item._id);
          }}
        >
          <AiFillDelete />
        </p>
        <p
          className="text-2xl "
          onClick={() => {
            setType("Product Details");
            setData(item);
            setProducts(true);
          }}
        >
          <CgMoreVertical />
        </p>
      </div>
    </div>
  );
}

export default Product;
