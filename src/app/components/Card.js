import Image from 'next/image';

 /**
  * Renders a card with product information.
  * @param {string} props.productName - The name of the product.
  * @param {string} props.originalPrice - The original price of the product.
  * @param {string} props.salePrice - The sale price of the product.
  * @param {string} props.imageUrl - The URL of the product image.
  * @param {string} props.badgeText - The text to be displayed as a badge on the card (optional).
  * @returns {JSX.Element} The card component.
  */
 export default function Card({ productName, originalPrice, salePrice, imageUrl, badgeText }) {
   return (
     <div className=" max-w-sm w-[300px]  rounded overflow-hidden shadow-lg relative">
       <Image className="w-full" src={imageUrl} width="500" height={500} alt={productName} />

       {/* Badge for Best Seller or any tag */}
       {badgeText && (
         <span className="bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded absolute top-2 left-2">
           {badgeText}
         </span>
       )} 

       <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">{productName}</div>
         <div className="flex items-baseline">
           <span className="text-gray-900 text-lg mr-2">{`Rs. ${salePrice}`}</span>
           <span className="text-gray-600 text-sm line-through">{`Rs. ${originalPrice}`}</span>
         </div>
       </div>
     </div>
   );
 }
  
  