import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { ThemeContext } from "../../context/ThemeController/ThemeController";
import SideBar from "../Shared/SideBar/SideBar";

const Checkout = () => {
   const { dark } = useContext(ThemeContext);
   const { user } = useContext(AuthContext);
   const course = useLoaderData();
   const { name, img, price } = course;

   const vat = (parseInt(price) * 0.1).toFixed(2);
   const total = parseInt(price) + parseFloat(vat);
   return (
      <div>
         <h1 className={`text-primary text-center mt-10 text-3xl font-bold mb-3`}>Checkout</h1>
         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 px-2 xl:px-16 ">
            {/* main part */}
            <div
               className={`${
                  dark ? "border-gray-700 bg-base-200" : "border-gray-100 bg-base-100"
               } lg:col-span-6 my-10 border shadow-md rounded-lg p-5`}
            >
               <h1 className={`text-primary text-3xl font-bold mb-3`}>Shipping Info</h1>
               <p
                  className={`${dark ? "text-slate-400" : "text-slate-600"} text-lg font-bold mb-3`}
               >
                  name :{"  "}
                  <input type="text" disabled value={user?.displayName.toUpperCase()} />
               </p>
               <p
                  className={`${dark ? "text-slate-400" : "text-slate-600"} text-lg font-bold mb-3`}
               >
                  Email:{"  "}
                  <input type="text" disabled value={user?.email} />
               </p>
               <p
                  className={`${dark ? "text-slate-400" : "text-slate-600"} text-lg font-bold mb-3`}
               >
                  Phone:{"  "}
                  <input
                     type="text"
                     placeholder="Your Phone Number"
                     className="input input-bordered w-full max-w-xs"
                  />
               </p>
               <p
                  className={`${dark ? "text-slate-400" : "text-slate-600"} text-lg font-bold mb-3`}
               >
                  Address:
               </p>
               <textarea
                  name="address"
                  className="textarea textarea-bordered w-[100%]"
                  placeholder="Your Address"
                  rows="4"
               ></textarea>
            </div>

            {/* side part */}
            <div className={`lg:col-span-5 relative rounded`}>
               <div
                  className={`${
                     dark ? "border-gray-700 bg-base-200" : "border-gray-100 bg-base-100"
                  } border shadow-md rounded my-10 p-5 lg:sticky top-[15%]`}
               >
                  <h1 className={`text-primary text-3xl font-bold mb-3`}>Your Cart</h1>
                  <SideBar>
                     {/* Course Card */}
                     <div
                        className={`${
                           dark ? "bg-base-300 border-gray-600" : "bg-base-100 border-gray-200"
                        } shadow-lg rounded-md border `}
                     >
                        <div className="p-3 pb-0">
                           <img src={img} alt="" className=" rounded-md" />
                        </div>
                        <div className="p-3 flex flex-col gap-3">
                           <h1 className="text-2xl text-primary font-bold">{name}</h1>
                           <div className="flex justify-between">
                              <h1
                                 className={`${
                                    dark ? "text-slate-400" : "text-slate-600"
                                 } text-xl font-extrabold `}
                              >
                                 Price:
                              </h1>
                              <h1
                                 className={`${
                                    dark ? "text-slate-400" : "text-slate-600"
                                 } text-xl font-extrabold `}
                              >
                                 ${price}
                              </h1>
                           </div>
                        </div>
                     </div>

                     {/* total Price */}
                     <div
                        className={`${
                           dark ? "bg-base-300 border-gray-600" : "bg-base-100 border-gray-200"
                        } shadow-lg rounded-md border `}
                     >
                        <div className="p-3 flex flex-col gap-3">
                           <div className="flex justify-between">
                              <h1
                                 className={`${
                                    dark ? "text-slate-400" : "text-slate-600"
                                 } text-2xl font-extrabold `}
                              >
                                 Course Price:
                              </h1>
                              <h1
                                 className={`${
                                    dark ? "text-slate-400" : "text-slate-600"
                                 } text-2xl font-extrabold `}
                              >
                                 ${price}
                              </h1>
                           </div>
                           <div className="flex justify-between">
                              <h1
                                 className={`${
                                    dark ? "text-slate-400" : "text-slate-600"
                                 } text-2xl font-extrabold `}
                              >
                                 Total Vat:
                              </h1>
                              <h1
                                 className={`${
                                    dark ? "text-slate-400" : "text-slate-600"
                                 } text-2xl font-extrabold `}
                              >
                                 ${vat}
                              </h1>
                           </div>
                           <div className="flex justify-between">
                              <h1
                                 className={`${
                                    dark ? "text-slate-400" : "text-slate-600"
                                 } text-3xl font-extrabold `}
                              >
                                 Total Price:
                              </h1>
                              <h1
                                 className={`${
                                    dark ? "text-slate-400" : "text-slate-600"
                                 } text-3xl font-extrabold `}
                              >
                                 ${total}
                              </h1>
                           </div>
                        </div>
                     </div>
                  </SideBar>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Checkout;
