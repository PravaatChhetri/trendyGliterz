import React from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';
import Image from 'next/image';

/**
 * React component that creates a parallax effect on its content.
 * @returns {JSX.Element} The JSX code that creates the parallax effect.
 */
export default function Parallex() {
    const parallax = useParallax({
        speed: 50, // Adjust speed to control the parallax effect
        axis: 'y', // Can be 'x' or 'y' for horizontal or vertical scrolling
    });

    return (
        <div className='w-full h-full flex justify-center items-center -z-30' ref={parallax.ref} >
            {/* Content with parallax effect */}
            <div className="w-[70%] text-center">
                <h1 className='font-normal'>Dive into a world where exquisite design meets unparalleled quality. Explore more to witness the artistry and craftsmanship that define our creations</h1>
            </div>
        </div>
    );
}
