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
      <div>
         <div className="hero min-h-screen min-w-[100%] bg-base-100">
            <div className="hero-content flex flex-col lg:flex-row justify-between items-center m-auto">
               <div className="w-[100%] lg:w-[50%]">
                  <h1 className="text-5xl font-bold mb-2">
                     {user?.uid ? <> Hello, {user?.displayName.toUpperCase()} </> : null}
                  </h1>
                  <h1 className="text-5xl font-bold mb-2">Welcome to</h1>
                  <h1 className="text-5xl font-bold mb-2">Brain Tech Education</h1>
                  <p className="py-6">
                     We will provide some high quality courses. Please check out our courses. We
                     have courses in more than 4 different categories. Check out all.
                  </p>
                  <Link to="/courses">
                     <button className="btn btn-primary">Get Started</button>
                  </Link>
               </div>
               <div className="w-[100%] lg:w-[50%]">
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
                        <SwiperSlide key={i} className="flex justify-center">
                           <img src={img} alt="" />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
