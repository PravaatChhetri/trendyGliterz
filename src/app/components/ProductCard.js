// components/ProductCard.js
import Image from 'next/image';

import React from 'react'

export default function ProductCard ({ title, description, imageUrl, date }) {
    return (
      <div className=" relative max-w-sm  shadow-lg my-2">
        <Image className="w-full" width="500" height="500" src={imageUrl} alt={title} />
          <p className="absolute text-sm top-0 -right-5 font-bold text-[#1d1d1f] flex items-center custom-rotate-translate ">{"--- "+date}</p>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
          <a href="#" className="text-black hover:text-[#4a4a4a] text-xl">Read More</a>

        </div> */}
      </div>
    );
  };
  
  