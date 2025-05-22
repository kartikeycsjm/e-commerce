'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
const Banners = () => {
    const [counter, setCounter] = useState(1);
    const moveForward = () => {
        if (counter === 5) {
            setCounter(1)
            return;
        }
        setCounter(counter + 1);
    }
    const moveBackward = () => {
        if (counter === 1) {
            setCounter(5)
            return;
        }
        setCounter(counter - 1);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter(prev =>
                prev === 5 ? 1 : prev + 1
            );
        }, 4000);

        return () => clearTimeout(timer);
    }, [counter]);
    return (
        <div className='w-[100%] m-auto h-[85vh] 
        flex items-center justify-center'>
            <div className='w-[100%] h-[80vh]
                absolute top-18 z-10'>
                <Image
                    src={`/${counter}.jpg`}
                    alt={`Banner ${counter}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            <div className='w-[70%] md:w-[50%] absolute 
             bottom-15 h-[20vh] flex items-center 
            justify-between z-40'>
                <button onClick={moveForward}
                    className='w-[80px] h-[80px] 
                    flex items-center justify-center font-extralight
                    text-3xl md:text-5xl bg-[#00000045]
                rounded-full'>
                    &lt;
                </button>
                <button onClick={moveBackward}
                    className='w-[80px] h-[80px] font-extralight
                    flex items-center justify-center
                    text-3xl md:text-5xl bg-[#00000045]
                rounded-full'>
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default Banners