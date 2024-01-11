"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const data=[{
        title:"OUR PRODUCT",
        description:"Effortless Elegance, Exceptional Accessories",
        subtitle:"Unbeatable Offers, Uncompromising Quality – Tailored Just for You.",
        image:"/assets/images/image2-400x500.jpg"

    },
    {
        title:"OUR PRODUCT",
        description:"Elegance Redefined, Accessories Perfected",
        subtitle:"Unbeatable Offers, Uncompromising Quality – Tailored Just for You.",
        image:"/assets/images/image6-400x500.jpg"

    },
    {
        title:"OUR PRODUCT",
        description:"Unveiling Beauty, One Accessory at a Times",
        subtitle:"Unbeatable Offers, Uncompromising Quality – Tailored Just for You.",
        image:"/assets/images/image8-400x50011.jpg"

    },
]

    const prevSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + data.length) % data.length);
        console.log('Prev Index:', current);
    };

    const nextSlide = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % data.length);
        console.log('Next Index:', current);
    };
    

    return (
        <div className='flex  justify-center items-center text-white mx-10 gap-8 '>
            <button 
                aria-label="Previous slide"
                className='text-black hover:text-white transition-all ease-in-out'
                onClick={prevSlide}>
                    <FaChevronLeft className='text-4xl' />
            </button>
            <div className='text-black w-[40%] space-y-4'>
                <p className='text-sm'>{data[current].title}</p>
                <h1 className='font-extrabold text-4xl lg:text-5xl'>{data[current].description}</h1>
                <p className='text-sm'>{data[current].subtitle}</p>
            </div>
            <div className='rounded-xl overflow-hidden'>
                <Image src={data[current].image} width={500} height={500} alt="product" />
            </div>
            <button 
            className='text-black hover:text-white transition-all ease-in-out'
                aria-label="Next slide"
                onClick={nextSlide}>
                    <FaChevronRight className='text-4xl' />
            </button>
        </div>
    );
}
