import React from "react";
import { useLoaderData } from "react-router-dom";

const FAQ = () => {
   const faqs = useLoaderData();
   return (
      <div className="w-[95%] md:w-[90%] lg:w-[50%] mx-auto min-h-[80vh] mt-10">
         <h1 className="text-primary text-4xl font-bold text-center mb-5">
            Frequently Asked Questions
         </h1>
         {faqs.map((faq, i) => (
            <div
               key={faq.id}
               tabIndex={i}
               className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
               <div className="collapse-title text-xl font-medium">{faq.faq}</div>
               <div className="collapse-content">
                  <p>{faq.ans}</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default FAQ;
