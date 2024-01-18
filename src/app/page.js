"use client";
import Card from "./components/Card";
import ProductCard from "./components/ProductCard";
import { FaPlayCircle } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import Image from "next/image";
import Carousel from "./components/Carousel";

export default function Home() {
  /**
   * Renders a main section of a website with a background image, a list of featured products, and a section with four icons and descriptions.
   *
   * @returns {JSX.Element} The rendered Home component.
   */
  return (
    <main className="flex flex-col justify-start items-start text-4xl font-semibold w-full ">
      <div className="h-screen w-full frontPage -mt-[100px]  flex justify-center items-center">
        <Carousel/>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-5 my-5">
        <h1>Featured Products</h1>
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-[90%] space-y-3">
          <Card
            productName="Gold Jumka"
            originalPrice="1000"
            salePrice="500"
            imageUrl="/assets/images/image6-400x500.jpg"
            badgeText="Best Seller"
          />
          <Card
            productName="Ruby Jumka"
            originalPrice="1500"
            salePrice="500"
            imageUrl="/assets/images/image8-400x50011.jpg"
            badgeText="Best Seller"
          />
          <Card
            productName="Emerald Jumka"
            originalPrice="1000"
            salePrice="500"
            imageUrl="/assets/images/image2-400x500.jpg"
            badgeText="Best Seller"
          />
        </div>
        <div
          className="h-[600px] flex justify-center items-center"
          style={{
            backgroundImage: "url(/assets/images/parallaxWallpaper.jpg)",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[70%] text-center mx-auto">
            <h1 className="font-normal text-4xl">
              Dive into a world where exquisite design meets unparalleled
              quality. Explore more to witness the artistry and craftsmanship
              that define our creations
            </h1>
            <FaPlayCircle className=" mt-5 text-7xl text-center w-full animate-pulse text-[#274d74]"/>

          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full min-h-[300px] p-4 space-y-4">
          <div className="flex flex-col justify-center items-center ">
            <CiGlobe className="text-9xl" />
            <h1 className="text-lg font-bold">Delivery</h1>
            <p className="text-base">All over india</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoCart className="text-9xl" />
            <h1 className="text-lg font-bold">Hassle free Shopping</h1>
            <p className="text-base">Cash on Delivery Accepted</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BiLike className="text-9xl" />
            <h1 className="text-lg font-bold">Creative Design</h1>
            <p className="text-base">Curated Elegance, Crafted Just for You.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <TbBulb className="text-9xl" />
            <h1 className="text-lg font-bold">Best Price</h1>
            <p className="text-base">Most Reasonable price for product</p>
          </div>
        </div>
        <div className=" frontPage w-full lg:h-[40vw] flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full h-[500px] lg:h-full lg:w-1/2 flex flex-col justify-center items-center text-white bg-[#00000083] mx-auto">
            <div className="w-[80%] pl-10">
              <p className="font-bold text-sm">01.</p>
              <h1 className=" font-extrabold text-3xl">Stylish</h1>
              <div className="flex space-x-4">
                <p className="font-bold text-base">Unique</p>
                <p className="text-base w-[50%]">
                  Discover the epitome of style with our latest product.
                  Meticulously crafted to embody contemporary elegance, each
                  detail exudes sophistication.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full object-center lg:w-1/2 h-[600px] bg-white ">
            <Image
              className="w-full"
              src="/assets/images/image8-400x50011.jpg"
              width={500}
              height={500}
              alt="product"
            />
          </div>
        </div>
        <div className=" w-full flex flex-col items-start overflow-hidden p-4">
          <p className="text-lg font-extrabold">Trendy Gliterz</p>
          <p className="text-4xl font-extrabold">New Releases</p>
          <div className="flex flex-col lg:flex-row justify-evenly items-center w-full my-10">
            <ProductCard
              title={"Emareld Jumka"}
              description={
                "Beautifully crafted emerald jumka with gold plating."
              }
              imageUrl={"/assets/images/image2-400x500.jpg"}
              date="11/12/2023"
            />
            <ProductCard
              title={"Gold Jumka"}
              description={
                "Jumka with gold plating and beautiful design."
              }
              imageUrl={"/assets/images/image6-400x500.jpg"}
              date={"11/11/2023"}
            />
            <ProductCard
              title={"Ruby Jumka"}
              description={
                "Jumka with gold plating and ruby stones."
              }
              imageUrl={"/assets/images/image8-400x50011.jpg"}
              date={"11/11/2023"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
