import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import heroImg from "../../../assets/heroImages/heroImges";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
   const { user } = useContext(AuthContext);
   return (
      <div className="min-h-screen flex gap-9 flex-col lg:flex-row justify-center items-center lg:text-start ml-4 lg:mx-32 md:my-5 lg:my-0">
         <div className="w-[100%] lg:w-[60%] lg:pl-24">
            <div className="text-center lg:text-start">
               <h1 className="text-3xl lg:text-6xl font-extrabold">Hello, {user?.displayName}</h1>
               <h1 className="text-3xl lg:text-6xl font-extrabold">Welcome to</h1>
               <h1 className="text-3xl lg:text-6xl font-extrabold">Brain Tech Education</h1>
               <button className="btn btn-outline btn-primary mt-5">Get Started</button>
            </div>
         </div>
         <div className="w-[100%] lg:w-[40%]">
            <Swiper
               spaceBetween={10}
               slidesPerView={1}
               loop={true}
               autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
               }}
               modules={[Autoplay, Pagination]}
               className="mySwiper"
            >
               {heroImg.map((img, i) => (
                  <SwiperSlide key={i} className="flex justify-center w-[50vw] text-center">
                     <img src={img} alt="" className="w-[50%]" />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Hero;

/* 
<Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                     delay: 1500,
                     disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
               >
                  {heroImg.map((img, i) => (
                     <SwiperSlide key={i} className="flex justify-start lg:justify-center w-[50vw]">
                        <img src={img} alt="" className="w-[50%]" />
                     </SwiperSlide>
                  ))}
               </Swiper>
*/
