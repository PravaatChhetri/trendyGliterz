"use client"

import React from 'react'

export default function Pagination({ productsPerPage, totalProducts, paginate, currentPage }){
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className='flex justify-center items-center my-5'>
        <div className="join">
            {pageNumbers.map(number => {

                return <button key={number} className={`join-item btn ${number === currentPage ? 'btn-active' : ''}`} onClick={() => paginate(number)}>{number}</button>
            }

)}
  
</div>
        
      </nav>
    );
  };
  