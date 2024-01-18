"use client";
import React, { use } from "react";
import ProductForm from "../components/ProductForm";
import DashboardProduct from "../components/dashboardProduct";
import { AiOutlinePlus } from "react-icons/ai";
import { set } from "mongoose";

export default function Product() {
  const [products, setProducts] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [productList, setProductList] = React.useState([]);
  const [type, setType] = React.useState("");

  React.useEffect(() => {

  }, [productList]);

  React.useEffect(() => {
    try {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProductList(data);
        });
    } catch (error) {
      console.log(error);
    }
    if (data) {
      setProducts(true);
    }
  }, [data]);

  return (
    <div className="flex flex-col justify-start items-start h-full w-full">
      <h1 className="m-5 text-2xl font-semibold ">Products</h1>
      <div
        onClick={() => {
          setProducts(!products);
          if (!products) {
            setType("Add Product");
          }
          else{
              setData(null)
          }
        }}
        className="flex justify-center items-center border-2 border-[#5e5e5e] bg-neutral hover:bg-transparent hover:text-black text-white w-[90%] h-20 rounded-md mx-auto transition-all ease-in-out"
      >
        <p
          className={`text-5xl font-extrabold text-center transition-all ease-in-out hover:rotate-45 ${
            products ? "rotate-45" : ""
          }`}
        >
          <AiOutlinePlus />
        </p>
      </div>
      <div className="w-[90%] mx-auto my-5 gap-2 flex flex-col lg:flex-row justify-between items-start ">
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          {productList.map((item) => {
            return (
              <DashboardProduct
                key={item.id}
                setProducts={setProducts}
                setData={setData}
                item={item}
                setType={setType}
              />
            );
          })}
        </div>
        {products && <ProductForm data={data} type={type} />}
      </div>
    </div>
  );
}
