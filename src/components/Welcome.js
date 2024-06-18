import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


export default function Welcome() {
    return (
      <main>
       <div className="desktop bg-gradient-to-r from-indigo-400 to-indigo-400">
          <div className="flex w-[700] min-h-screen  justify-center items-center">
            <div className="hidden lg:block">
              <div
                className="rounded-3xl my-12 py-6 bg-white"  
                style={{ width: "100%" }}
              >
                <div className=" flex justify-center items-center">  
                  <img
                    src="/image 35.png"
                    alt="My SVG"
                    width={100}
                    height={100}
                    className="pt-4"
                  />
                </div>
               
                <div className=" flex justify-center flex-center pt-12">
                 
                  <div className="font-extrabold text-indigo-600 text-5xl ">
                    Welcome
                  </div>
                 
                </div>
                <div className=" flex justify-center flex-center ">
                  <div className="text-center leading-6 w-[430px] py-2 text-xl text-slate-500 font-medium">
                  Shubham Rajput
                  
                  </div>
                </div>
                <div className=" flex justify-center flex-center ">
                  <div className="text-center text-base leading-6 w-[430px] pt-2 pb-2 text-slate-500">
                  Business Solution
                  
                  </div>
                </div>
                <div className=" flex justify-center items-center">
            <button className="h-11 font-medium bg-indigo-400 hover:bg-indigo-500 text-base text-gray-100 px-12 my-8 rounded-md w-72">
            <Link href="/home">   Get Started</Link> 
                  </button>
                  </div>
              </div>
            </div>
 
         
          </div>
        </div>
      </main>)}