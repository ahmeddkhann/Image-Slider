
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './logo1.png' 
import './Slider.css'; 
import {Smartphone , Mail, Linkedin, Facebook} from 'lucide-react'

// Array of slide data
const slides = [
  { src: 'https://images.pexels.com/photos/27519587/pexels-photo-27519587/free-photo-of-a-building-with-a-blue-sky-and-a-white-roof.jpeg', alt: 'Slide 1' },
  { src: 'https://images.pexels.com/photos/24017562/pexels-photo-24017562/free-photo-of-purple-blossoms-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Slide 2' },
  { src: "https://images.pexels.com/photos/18360894/pexels-photo-18360894/free-photo-of-a-tree-with-pink-flowers-in-front-of-an-apartment-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "slide 3"},
  {src: "https://images.pexels.com/photos/17354530/pexels-photo-17354530/free-photo-of-grass-growing-on-sandy-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", alt: "slide 4"}
  // Add more slides as needed
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full">
            <img src={slide.src} alt={slide.alt} className="w-[100vw] h-[100vh] object-cover"/>
          </div>
        ))}
      </Slider>

      <div className="absolute top-0 left-0 w-full flex ">
        <div className="flex ml-2">
          <img src={logo} alt="Logo" className="w-[80px] h-[80px] 
                             md:w-[100px] md:h-[100px] lg:w-[90px] lg:h-[90px]"/>
          <h1 className="text-white sm:mt-1 text-xl lg:text-4xl md:text-3xl
                   font-extrabold mt-6 md:mt-6 lg:mt-6 ">Company Name</h1>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-4">
        <h1 className='text-white mb-2 md:mb-3 md:text-3xl font-bold'>
            Contact Us
        </h1>
        <div className='flex text-3xl justify-between font-bold text-white'>
        <Smartphone /> <Facebook /> <Linkedin /> <Mail />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
