import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Change() {
  return (
    <main>
      <div className="justify-center flex-center bg-gradient-to-r from-indigo-400 to-indigo-400 items-center  m-0 p-0">
        <div className="desktop justify-center flex-center">
          <div className="flex w-full min-h-screen  justify-center flex-center">
            <div className=" w-2/3 flex justify-center items-center ">
              <div className=" w-2/3 py-4">
              <div className="in" style={{ paddingTop: "20%" }}>
                <div className=" flex justify-center flex-center ">
                  <div className="font-bold text-slate-200 text-6xl pb-4 ">
                    Hello, Igniculuss
                  </div>
                  &nbsp;
                  <svg
                    width="66"
                    height="82"
                    viewBox="0 0 66 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 41C18.2254 41 33 22.6437 33 0C33 22.6437 47.7746 41 66 41C47.7746 41 33 59.3563 33 82C33 59.3563 18.2254 41 0 41Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className=" flex justify-center flex-center ">
                  <div
                    className="text-base leading-6 w-[550px] pt-2  text-slate-200"
                    style={{ paddingBottom: "20%" }}
                  >
                    Skip repetitive and manual sales-marketing tasks. Get highly
                    productive through automation and save tons of time!{" "}
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex items-center bg-white justify-center py-6 ">
              <div className=" w-2/3 max-w-container ">
              <a href="" className="mt-12 flex items-center gap-1">
                <svg
                  width="32"
                  height="40"
                  viewBox="0 0 32 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z"
                    fill="#282828"
                  />
                </svg>
                <span className="text-slate-950 font-bold text-2xl py-6">
                  Verify Your Sign-up
                </span>
              </a>
              <div className="text-slate-800">
                Enter the one-time password sent to your Mobile Number.
              </div>
              <div className="mx-auto">
                <form action="" className="grid space-y-6">
                  <div className="flex justify-between mt-12 py-6">
                    <div className="text-left  text-slate-950 font-bold">
                      753219846
                    </div>

                    <Link to="/verify"
                      className="text-right text-indigo-600 no-underline"
                     
                    >
                      {" "}
                      Change
                    </Link>
                  </div>

                  <input
                    type="otp"
                    required
                    className="h-10 rounded-md px-3  border text-xs focus:outline-none"
                    style={{ margin: 0, border: "1px solid #D5D5D5" }}
                    placeholder="XXX XXX"
                  />
                  <div className="flex justify-between m-0 pb-12">
                    <div className="text-left text-slate-950 ">Resend</div>
                    <a>
                      {" "}
                      <div className="text-right text-indigo-600 no-underline">
                        Choose Other Way
                      </div>
                    </a>
                  </div>
                  <Link href="/dashboard-in">
                    <button className="h-11 w-96 font-medium bg-indigo-400 hover:bg-indigo-500 text-base text-gray-100  rounded-md">
                      Submit
                    </button>
                  </Link>
                  <div class="relative text-center py-4">
                    <div class="absolute inset-0 flex items-center">
                    </div>
                
                  </div>
                 
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/*    <div className="desktop bg-gradient-to-r from-indigo-400 to-indigo-400">
        <div className="flex w-full min-h-screen  justify-center items-center">
          <div className="hidden lg:block w-2/3 ">
            <div className="rounded-lg m-12 " style={{ width: "80%" }}>
              <div className="in" style={{ paddingTop: "20%" }}>
                <div className=" flex justify-center flex-center ">
                  <div className="font-bold text-slate-200 text-6xl pb-4 ">
                    Hello, Igniculuss
                  </div>
                  &nbsp;
                  <svg
                    width="66"
                    height="82"
                    viewBox="0 0 66 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 41C18.2254 41 33 22.6437 33 0C33 22.6437 47.7746 41 66 41C47.7746 41 33 59.3563 33 82C33 59.3563 18.2254 41 0 41Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className=" flex justify-center flex-center ">
                  <div
                    className="text-base leading-6 w-[550px] pt-2  text-slate-200"
                    style={{ paddingBottom: "20%" }}
                  >
                    Skip repetitive and manual sales-marketing tasks. Get highly
                    productive through automation and save tons of time!{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-12 lg:w-1/3 flex items-center bg-white justify-center ">
            <div className="px-4 sm:px-0 w-full max-w-sm">

            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
