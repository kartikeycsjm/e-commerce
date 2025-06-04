'use client'
import React, { useRef } from 'react';
import Banners from '@/components/Banners';
import Card from '@/components/Card';


type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: string;
  discountedPrice: number;
};


const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "/Wireless_Headphone.jpg",
    price: 4919,
    discount: "10%",
    discountedPrice: 4427
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "/Smart_Watch.jpg",
    price: 10659,
    discount: "15%",
    discountedPrice: 9050
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "/Bluetooth_Speaker.jpg",
    price: 3279,
    discount: "5%",
    discountedPrice: 3115
  },
  {
    id: 4,
    name: "Gaming Mouse",
    image: "/Gaming_Mouse.jpg",
    price: 2049,
    discount: "20%",
    discountedPrice: 1639
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    image: "/Mechanical_Keyboard.jpg",
    price: 6149,
    discount: "10%",
    discountedPrice: 5534
  },
  {
    id: 6,
    name: "4K Monitor",
    image: "/4K_Monitor.jpg",
    price: 24599,
    discount: "25%",
    discountedPrice: 18449
  },
  {
    id: 7,
    name: "USB-C Hub",
    image: "/USB-C_Hub.jpg",
    price: 1639,
    discount: "0%",
    discountedPrice: 1639
  },
  {
    id: 8,
    name: "External SSD 1TB",
    image: "/External_SSD_1TB.jpg",
    price: 9019,
    discount: "15%",
    discountedPrice: 7667
  },
  {
    id: 9,
    name: "Webcam 1080p",
    image: "/Webcam_1080p.jpg",
    price: 4099,
    discount: "10%",
    discountedPrice: 3689
  },
  {
    id: 10,
    name: "Laptop Stand",
    image: "/Laptop_Stand.jpg",
    price: 2869,
    discount: "5%",
    discountedPrice: 2725
  }
];



const Page = () => {
  const scrollwalaR = useRef<HTMLDivElement | null>(null);

  const l = () => {
    scrollwalaR.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const r = () => {

    scrollwalaR.current?.scrollBy({ left: 400 });
  };


  return (
    <div className='w-full min-h-screen text-white mt-14'>
      <Banners />
      <h1 className='mx-10 my-5 font-bold text-center text-2xl md:text-5xl'>
        Products
      </h1>
      <div className="relative">
        <section
          id='cartsection'
          ref={scrollwalaR}
          className="w-full flex gap-4 overflow-x-auto px-4 py-2 scrollbar-hide scroll-smooth"
        >
          {cartItems.map((item) => (
            <div key={item.id} className="flex-shrink-0">
              <Card
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                discount={item.discount}
                discountedPrice={item.discountedPrice}
              />
            </div>
          ))}
        </section>
        <button
          onClick={l}
          className='
          absolute left-10 top-1/2 transform -translate-y-1/2 
          w-[50px] h-[50px] 
          flex items-center justify-center 
          text-2xl bg-[#000000a3] rounded-full z-10'
        >
          &lt;
        </button>
        <button

          onClick={r}
          className='absolute right-10 top-1/2 
          transform 
          -translate-y-1/2 
          w-[50px] h-[50px] flex items-center 
          justify-center text-2xl bg-[#000000a3] 
          rounded-full z-10'
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Page;





{/* <section id='cartsection' className="w-full flex gap-4 overflow-x-auto px-4 py-2 scrollbar-hide">
        {cartItems.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              discount={item.discount}
              discountedPrice={item.discountedPrice}
            />
          </div>
        ))}
      </section> */}

{/* not in use now */ }
{/* <section className='mx-8 grid grid-cols-1
      sm:grid-cols-2 
      md:grid-cols-3 gap-5 sm:gap-10 md:gap-5
      mb-10'>
        {cartItems.map((item, index) => (
          <Card
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            discount={item.discount}
            discountedPrice={item.discountedPrice}
            key={item.id} />
        ))}
      </section> */}