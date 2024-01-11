"use client";
import { useState,useEffect } from "react";
import React from "react";
import ProductPageCard from "../components/ProductPageCard";
// import products from "../../data.json";
import Pagination from "../components/Pagination";
import { BsSearch } from "react-icons/bs";


export default function Product() {
  // Inside your component
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const productsPerPage = 9;

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setFilterList(getUniqueCategories(data));
            
        })
        .catch(error => {
            console.log(error);
        });
  },[]);

  function getUniqueCategories(products) {
    const uniqueCategories = new Set();

    products.forEach(product => {
        uniqueCategories.add(product.category);
    });

    return Array.from(uniqueCategories);
}
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilterData(filteredProducts);
  };

  const handleFilter = (e) => {
    const filteredProducts = products.filter((product) => {
      return product.category.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setFilterData(filteredProducts);
  }

  return (
    <main>
      <div
        className="-mt-[100px] h-[400px] flex justify-center items-center bg-neutral  shadow-xl"
        style={{
          borderBottomLeftRadius: "50% 25%",
          borderBottomRightRadius: "50% 25%",
        }}
      >
        <h1 className=" text-6xl lg:text-8xl text-center text-white font-bold my-5 ">
          Products
        </h1>
      </div>

      <div className="flex justify-center items-center my-10">
        <div className="flex  border-[1px] border-[#ccc] w-[300px] h-fit rounded-lg">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="w-[250px] rounded-lg p-1"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="text-neutral text-2xl p-2 hover:scale-[1.1] transition-all ease-in-out"
            onClick={handleSearch}
          >
            <BsSearch />
          </button>
        </div>
        <select className="border-[1px] border-[#ccc] rounded-lg p-2 ml-5" onChange={handleFilter}>
          <option value="All">All</option>
          {filterList.map((item,index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
       {filterData.length===0? currentProducts.map((product) => (
          <ProductPageCard key={product._id} product={product} />
        )):
        filterData.map((product) => (
          <ProductPageCard key={product._id} product={product} />
        ))}

      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
}
