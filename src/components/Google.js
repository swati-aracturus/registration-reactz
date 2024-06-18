import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import {  useHistory} from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";


export default function Google() {
    return (
        <main>
            <div className="desktop bg-gradient-to-r from-indigo-400 to-indigo-400">
                <div className="flex w-full min-h-screen  justify-center items-center">
                    <div className="hidden lg:block">
                        <div
                            className="rounded-3xl my-12 py-2 bg-white w-auto"
                           >
                            <div className="flex  justify-between w-96">
                                <div className=" flex  justify-between px-6">
                                    <img
                                        src="/gm.png"
                                        alt="My SVG"
                                        width={25}
                                        height={20}

                                    />&nbsp;

                                    <p>Sign in with google</p>
                                </div>

                            </div>

                            <hr className=" my-2 bg-gray-400 " style={{ height:"1.5px"}}/>
                            <div className=" flex justify-center items-center">
                                <img
                                    src="/image 1.png"
                                    alt="My SVG"
                                    width={90}
                                    height={90}
                                    className="pt-4"                                />
                            </div>
                            <div className=" flex justify-center items-center">
                                <div className="text-indigo-700 font-semibold text-2xl">Choose an Account</div>

                            </div>
                            <div className=" flex justify-center items-center">
                                <div className="font-medium">To continue to Igniculuss</div>

                            </div>

                            <div className="flex pt-14 pb-4 px-12 justify-between" style={{ width:"650px"}}>
                                <div className=" flex  justify-between px-6 ">
                                    <img
                                        src="/acc.png"
                                        alt="My SVG"
                                        width={45}
                                        height={0}

                                    />&nbsp;
                                   <div>
                                    <div className=" text-lg font-semibold ">Shubham Rajput</div>
                                    <div className="text-sm font-normal text-slate-500 py-0">ShubhamRajput1234@gmail.com</div>
                                    </div> 
                             
                                </div>
                               
                            </div>
                            <div className="flex justify-center items-center">
                             <hr className=" my-2 bg-gray-400 " style={{width:"80%", height:"1.5px"}}/>
                        </div>
                            <div className="flex pt-4 pb-4 px-12 justify-between" style={{ width:"650px"}}>
                                <div className=" flex  justify-between px-6 ">
                                    <img
                                        src="/acc.png"
                                        alt="My SVG"
                                        width={45}
                                        height={0}

                                    />&nbsp;
                               
                                    <div className="pt-3 pl-0 text-lg font-semibold ">Use Another Account</div>
                                   
                             
                                </div>
                               
                            </div>
                            <div className="flex justify-center items-center">
                             <hr className=" my-2 bg-gray-400 " style={{width:"80%", height:"1.6px"}}/>
                        </div>
                        <div className="flex justify-center items-center text-center" style={{ width:"650px"}}>
                        <div className="text-justify text-slate-600  text-sm  py-4 mb-4" style={{paddingLeft:"15%", paddingRight:"15%"}}> To Continue, Google will share your name, email address, language preference and profile picture with Igniculuss. Before
                         using this app, You can review Igniculuss. <a className="text-indigo-600">Privacy Policy</a> and <a className="text-indigo-600">Terms of Service.</a>
                        </div>
                        </div>
                       </div>
                    </div>
                </div>


            </div>
        </main>);
}
