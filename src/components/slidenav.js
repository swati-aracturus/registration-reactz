"use client";

import cn from "classnames";
import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";


function Slide() {
  const notify = () => toast.success("Successfully Logged In!");

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const handleLoginClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);



  const [user, SetUser] = useState("")
  const [pass, SetPass] = useState("")

  const handleUser = (e) => {
    const value = e?.target.value;
    if(value !== null);
    SetUser(value)
  }

  const handlePass = (e) => {
    const value = e?.target.value;
    if(value !== null);
    SetPass(value)
  }

const validateForm = () =>{  
  if (!user.trim()) {
    toast.error("Username / Mobile No./ User ID is required");
  } else if (!pass.trim()) {
    toast.error("Password is required");
   } else {
      registerEvent();
    }
  }



  const registerEvent = async () => {
    const data = {
      user: user,
      password: pass
    }
    console.log(data)
    await axios.post("https://shreevct.com/api/login", data)
    .then((res) =>{
      console.log(res)
    })
    .catch((error) =>{
      console.log(error);
    })
  } 

  return (
    <>
      <div className="desktop">
        <header className="bg-[#080A52] text-white px-16 ">
          <div className="flex items-center justify-between lg:container mx-auto px-6">
            {/* Left side options */}
            <div className="flex items-center ">
              {/* Home, About, Membership, Contact, Matches as */}
              <nav className="hidden lg:flex space-x-8">
                <a  className="hover:text-gray-300 active">
                  <a href="/"> Home</a>
                </a>
                <a  className="hover:text-gray-300 ">
                <a href="/about">About</a>  
                </a>
                <a className="hover:text-gray-300 ">
                  <a href="/membership"> Membership</a>
                </a>
                <a  className="hover:text-gray-300 ">
                <a href="/contact">  Contact</a>
                </a>
                <a  className="hover:text-gray-300 ">
                <a href="/match"> Matches</a>
                </a>
              </nav>

              {/* Search bar */}
            </div>

            <div className="flex items-center ">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search"
                  className=" placeholder-gray-200 py-2 px-6 sew rounded-full  bg-[#4a5c85] focus:outline-none focus:ring focus:ring-[#809cdf] text-2xl md:text-base  text-fuchsia-400"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-200"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
              </div>

              <button className="w-28 py-1 ml-4 rounded-full bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 text-lg">
                <a href="/registration"> Register</a>
              </button>
              <button
                className="w-28 py-1 rounded-full ml-2 bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 text-lg"
                onClick={handleLoginClick}
              >
                Login
              </button>

              {isPopupOpen && (
                <div className="fixed mobile inset-0 flex items-center justify-center bg-black backdrop-blur bg-opacity-50 z-50">
                  <div
                    ref={popupRef}
                    className="bg-white rounded-lg p-6  max-w-lg w-full mx-4"
                  >
                    <div className="flex pt-[5%] justify-center items-center">
                      <p className="text-2xl text-slate-800 font-bold ps:!text-[16px] pm:text-[20px] pm:font-[550] ">
                        LOG IN
                      </p>
                    </div>
                    <div className="flex pt-2 pm:!pt-0 pm:!-translate-y-2 justify-center">
                      <img src="/tb.png" className="w-36 ps:pt-2" alt="pic"/>
                    </div>
                    <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="px-6 pxs:px-0">
                      <div className="mb-4">
                        <label className="block text-gray-700 mt-[5%] pb-2">
                          Mobile No. / User Id / Email Id
                        </label>
                        <input
                        required
                        onChange={(e) => handleUser(e)}
                          type="text"
                          className="w-full px-3 py-2  text-gray-600 border border-gray-400 rounded "
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 pb-2">
                          Password
                        </label>
                        <input
                        required
                         onChange={(e) => handlePass(e)}
                          type="text"
                          className="w-full px-3 py-2  text-gray-600 border border-gray-400 rounded "
                        />
                        <div className="flex justify-between pt-6">
                          <div className="flex items-center">
                            <input
                              id="a-checkbox"
                              type="checkbox"
                              value=""
                              className="appearance-none rounded h-4 w-4 bg-transparent
                      focus:ring-0 focus:ring-offset-0 checked:bg-pink-600
                      border-pink-600 border-2  checked:text-pink-200 ps:w-4 ps:h-4 "
                            />
                            <label
                              htmlFor="a-checkbox"
                              className="ms-2 text-base ps:text-sm text-slate-800"
                            >
                              Remember Me{" "}
                            </label>
                          </div>
                          <a className="text-pink-600 text-base text-right ps:text-sm">
                            Forgot Password
                          </a>
                        </div>
                      </div>
                      <button
                      onClick={() => validateForm()}
                        type="submit"
                        className="w-full mb-[5%] py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 mt-[5%]"
                      >
                        Login
                      </button>
                      <Toaster
                        position="top-center"
                        reverseOrder={false}
                        gutter={8}
                        containerClassName=""
                        containerStyle={{}}
                        toastOptions={{
                          // Define default options
                          className: "",
                          duration: 5000,
                          style: {
                            background: "#363636",
                            color: "#fff",
                          },
  
                          // Default options for specific types
                          success: {
                            duration: 3000,
                            theme: {
                              primary: "green",
                              secondary: "black",
                            },
                          },
                        }}
                      />
                      <div className="justify-center flex align-center items-center">
                        <p className="text-lg ps:text-sm text-slate-800">
                          Already have an account - &nbsp;{" "}
                        </p>
                        <button
                          className="   pm:py-1  ps:text-sm  pt-1 pb-1.5 px-4 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                          onClick={() => console.log("Register")}
                        >
                          Log In
                        </button>
                      </div>
                      <div className="justify-between flex align-center items-center pt-4">
                        <div></div>
                        <div>
                          <svg
                            width="68"
                            height="45"
                            viewBox="0 0 68 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.212 40H1.064V30.564H2.394L5.418 35.338C6.118 36.444 6.664 37.438 7.112 38.404L7.14 38.39C7.028 37.13 7 35.982 7 34.512V30.564H8.148V40H6.916L3.92 35.212C3.262 34.162 2.632 33.084 2.156 32.062L2.114 32.076C2.184 33.266 2.212 34.4 2.212 35.968V40ZM15.6828 36.836H10.9228C10.9508 38.502 12.0148 39.188 13.2468 39.188C14.1288 39.188 14.6608 39.034 15.1228 38.838L15.3328 39.72C14.8988 39.916 14.1568 40.154 13.0788 40.154C10.9928 40.154 9.74684 38.768 9.74684 36.724C9.74684 34.68 10.9508 33.07 12.9248 33.07C15.1368 33.07 15.7248 35.016 15.7248 36.262C15.7248 36.514 15.6968 36.71 15.6828 36.836ZM10.9368 35.954H14.5348C14.5488 35.17 14.2128 33.952 12.8268 33.952C11.5808 33.952 11.0348 35.1 10.9368 35.954ZM22.6965 36.836H17.9365C17.9645 38.502 19.0285 39.188 20.2605 39.188C21.1425 39.188 21.6745 39.034 22.1365 38.838L22.3465 39.72C21.9125 39.916 21.1705 40.154 20.0925 40.154C18.0065 40.154 16.7605 38.768 16.7605 36.724C16.7605 34.68 17.9645 33.07 19.9385 33.07C22.1505 33.07 22.7385 35.016 22.7385 36.262C22.7385 36.514 22.7105 36.71 22.6965 36.836ZM17.9505 35.954H21.5485C21.5625 35.17 21.2265 33.952 19.8405 33.952C18.5945 33.952 18.0485 35.1 17.9505 35.954ZM28.8842 30.06H30.1162V38.25C30.1162 38.852 30.1302 39.538 30.1722 40H29.0662L29.0102 38.824H28.9822C28.6042 39.58 27.7782 40.154 26.6722 40.154C25.0342 40.154 23.7742 38.768 23.7742 36.71C23.7602 34.456 25.1602 33.07 26.8122 33.07C27.8482 33.07 28.5482 33.56 28.8562 34.106H28.8842V30.06ZM28.8842 37.158V35.982C28.8842 35.828 28.8702 35.618 28.8282 35.464C28.6462 34.68 27.9742 34.036 27.0502 34.036C25.7762 34.036 25.0202 35.156 25.0202 36.654C25.0202 38.026 25.6922 39.16 27.0222 39.16C27.8482 39.16 28.6042 38.614 28.8282 37.69C28.8702 37.522 28.8842 37.354 28.8842 37.158ZM35.1753 30.564H36.3933V34.512H40.9573V30.564H42.1893V40H40.9573V35.576H36.3933V40H35.1753V30.564ZM49.7121 36.836H44.9521C44.9801 38.502 46.0441 39.188 47.2761 39.188C48.1581 39.188 48.6901 39.034 49.1521 38.838L49.3621 39.72C48.9281 39.916 48.1861 40.154 47.1081 40.154C45.0221 40.154 43.7761 38.768 43.7761 36.724C43.7761 34.68 44.9801 33.07 46.9541 33.07C49.1661 33.07 49.7541 35.016 49.7541 36.262C49.7541 36.514 49.7261 36.71 49.7121 36.836ZM44.9661 35.954H48.5641C48.5781 35.17 48.2421 33.952 46.8561 33.952C45.6101 33.952 45.0641 35.1 44.9661 35.954ZM51.2798 40V30.06H52.5118V40H51.2798ZM54.5884 42.772V35.436C54.5884 34.568 54.5604 33.868 54.5324 33.224H55.6384L55.6944 34.386H55.7224C56.2264 33.56 57.0244 33.07 58.1304 33.07C59.7684 33.07 61.0004 34.456 61.0004 36.514C61.0004 38.95 59.5164 40.154 57.9204 40.154C57.0244 40.154 56.2404 39.762 55.8344 39.09H55.8064V42.772H54.5884ZM55.8064 36.08V37.242C55.8064 37.424 55.8344 37.592 55.8624 37.746C56.0864 38.6 56.8284 39.188 57.7104 39.188C59.0124 39.188 59.7684 38.124 59.7684 36.57C59.7684 35.212 59.0544 34.05 57.7524 34.05C56.9124 34.05 56.1284 34.652 55.8904 35.576C55.8484 35.73 55.8064 35.912 55.8064 36.08ZM64.6031 37.312H63.5111L63.4831 36.948C63.3991 36.206 63.6511 35.366 64.3511 34.54C64.9811 33.784 65.3311 33.238 65.3311 32.608C65.3311 31.894 64.8831 31.418 64.0011 31.404C63.4971 31.404 62.9371 31.572 62.5871 31.838L62.2511 30.956C62.7271 30.62 63.5111 30.396 64.2531 30.396C65.8631 30.396 66.5911 31.39 66.5911 32.454C66.5911 33.406 66.0591 34.106 65.3871 34.89C64.7711 35.618 64.5471 36.248 64.5891 36.962L64.6031 37.312ZM64.0291 40.154H64.0151C63.5391 40.154 63.2031 39.776 63.2031 39.286C63.2031 38.768 63.5531 38.404 64.0431 38.404C64.5331 38.404 64.8691 38.768 64.8691 39.286C64.8691 39.776 64.5471 40.154 64.0291 40.154Z"
                              fill="#363636"
                            />
                            <path
                              d="M44.5002 14.2567C44.5002 7.85167 39.5302 3.5 34.0002 3.5C28.5285 3.5 23.5002 7.75833 23.5002 14.3267C22.8002 14.7233 22.3335 15.47 22.3335 16.3333V18.6667C22.3335 19.95 23.3835 21 24.6668 21C25.3085 21 25.8335 20.475 25.8335 19.8333V14.2217C25.8335 9.75333 29.2752 5.845 33.7435 5.71667C34.8371 5.68341 35.9262 5.87001 36.9463 6.2654C37.9665 6.66079 38.8969 7.25694 39.6824 8.01851C40.4679 8.78009 41.0925 9.69159 41.5193 10.699C41.946 11.7064 42.1662 12.7893 42.1668 13.8833V22.1667H34.0002C33.3585 22.1667 32.8335 22.6917 32.8335 23.3333C32.8335 23.975 33.3585 24.5 34.0002 24.5H42.1668C43.4502 24.5 44.5002 23.45 44.5002 22.1667V20.7433C45.1885 20.3817 45.6668 19.67 45.6668 18.83V16.1467C45.6668 15.33 45.1885 14.6183 44.5002 14.2567Z"
                              fill="#EB2188"
                            />
                            <path
                              d="M30.5002 16.3333C31.1445 16.3333 31.6668 15.811 31.6668 15.1667C31.6668 14.5223 31.1445 14 30.5002 14C29.8558 14 29.3335 14.5223 29.3335 15.1667C29.3335 15.811 29.8558 16.3333 30.5002 16.3333Z"
                              fill="#EB2188"
                            />
                            <path
                              d="M37.5002 16.3333C38.1445 16.3333 38.6668 15.811 38.6668 15.1667C38.6668 14.5223 38.1445 14 37.5002 14C36.8558 14 36.3335 14.5223 36.3335 15.1667C36.3335 15.811 36.8558 16.3333 37.5002 16.3333Z"
                              fill="#EB2188"
                            />
                            <path
                              d="M41 12.8683C40.7219 11.2282 39.8724 9.73929 38.6019 8.66528C37.3314 7.59126 35.722 7.00137 34.0584 7C30.5234 7 26.72 9.92833 27.0234 14.525C28.462 13.9363 29.7327 13.0007 30.722 11.8017C31.7113 10.6028 32.3886 9.1776 32.6934 7.65333C34.2217 10.7217 37.36 12.8333 41 12.8683Z"
                              fill="#EB2188"
                            />
                          </svg>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
      <div className="mobile">
        <nav className="flex items-center justify-between flex-wrap bg-[#080A52] py-2 px-6 ps:!py-0.5">
          <div className="flex items-center flex-shrink-0 text-white mr-6 ">
            <img
              src="/logo 1.png"
              height={30}
              width={30}
              priority
              alt="Tailwind CSS logo"
            />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleNavbar}
              className="flex items-center  px-3 py-2 ps:!p-1 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  className="toggle"
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <a
                href=""
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
            <a href="/"> Home</a>
              </a>
              <a
                
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
              <a href="/about">About</a>  
                </a>
              <a
                
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
            <a href="/membership"> Membership</a>
                   </a>
              <a
                
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg"
              >
                <a href="/contact">  Contact</a>
              </a>
              <a
                
                className=" block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 text-center text-lg" >
                <a href="/match">  Matches</a> 
              </a>
            </div> 
            <div className=" p-4 flex justify-center items-center">
              <button
                className="w-28 py-1 mr-4 text-white rounded-full bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 "
        
              >
               <a href="/registration"> Register</a>
              </button>
              <button
                className="w-28 py-1 text-white rounded-full bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-400 "
                onClick={handleLoginClick}
              >
                Login
              </button>
              {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur bg-opacity-50 z-50">
                  <div
                    ref={popupRef}
                    className="bg-white rounded-lg p-6  max-w-lg w-full mx-4"
                  >
                    <div className="flex pt-[5%] justify-center items-center">
                      <p className="text-2xl text-slate-800 font-bold ps:!text-[16px] pm:text-[20px] pm:font-[550] ">
                        LOG IN
                      </p>
                    </div>
                    <div className="flex pt-2 pm:!pt-0 pm:!-translate-y-2 justify-center">
                      <img src="/tb.png" className="w-36 ps:pt-2" alt="pic"/>
                    </div>
                    <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="px-6 pxs:px-0">
                      <div className="mb-4">
                        <label className="block text-gray-700 mt-[5%] pb-2">
                          Mobile No. / User Id / Email Id
                        </label>
                        <input
                        required
                        onChange={(e) => handleUser(e)}
                          type="text"
                          className="w-full px-3 py-2  text-gray-600 border border-gray-400 rounded "
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 pb-2">
                          Password
                        </label>
                        <input
                        required
                         onChange={(e) => handlePass(e)}
                          type="text"
                          className="w-full px-3 py-2  text-gray-600 border border-gray-400 rounded "
                        />
                        <div className="flex justify-between pt-6">
                          <div className="flex items-center">
                            <input
                              id="a-checkbox"
                              type="checkbox"
                              value=""
                              className="appearance-none rounded h-4 w-4 bg-transparent
                      focus:ring-0 focus:ring-offset-0 checked:bg-pink-600
                      border-pink-600 border-2  checked:text-pink-200 ps:w-4 ps:h-4 "
                            />
                            <label
                              htmlFor="a-checkbox"
                              className="ms-2 text-base ps:text-sm text-slate-800"
                            >
                              Remember Me{" "}
                            </label>
                          </div>
                          <a className="text-pink-600 text-base text-right ps:text-sm">
                            Forgot Password
                          </a>
                        </div>
                      </div>
                      <button
                      onClick={() => validateForm()}
                        type="submit"
                        className="w-full mb-[5%] py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 mt-[5%]"
                      >
                        Login
                      </button>
                      <Toaster
                        position="top-center"
                        reverseOrder={false}
                        gutter={8}
                        containerClassName=""
                        containerStyle={{}}
                        toastOptions={{
                          // Define default options
                          className: "",
                          duration: 5000,
                          style: {
                            background: "#363636",
                            color: "#fff",
                          },
  
                          // Default options for specific types
                          success: {
                            duration: 3000,
                            theme: {
                              primary: "green",
                              secondary: "black",
                            },
                          },
                        }}
                      />
                      <div className="justify-center flex align-center items-center">
                        <p className="text-lg ps:text-sm text-slate-800">
                          Already have an account - &nbsp;{" "}
                        </p>
                        <button
                          className="   pm:py-1  ps:text-sm  pt-1 pb-1.5 px-4 text-white rounded-[10px] bg-pink-600 hover:bg-pink-700 focus:outline-none  focus:ring focus:ring-pink-400 "
                          onClick={() => console.log("Register")}
                        >
                          Log In
                        </button>
                      </div>
                      <div className="justify-between flex align-center items-center pt-4">
                        <div></div>
                        <div>
                          <svg
                            width="68"
                            height="45"
                            viewBox="0 0 68 45"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.212 40H1.064V30.564H2.394L5.418 35.338C6.118 36.444 6.664 37.438 7.112 38.404L7.14 38.39C7.028 37.13 7 35.982 7 34.512V30.564H8.148V40H6.916L3.92 35.212C3.262 34.162 2.632 33.084 2.156 32.062L2.114 32.076C2.184 33.266 2.212 34.4 2.212 35.968V40ZM15.6828 36.836H10.9228C10.9508 38.502 12.0148 39.188 13.2468 39.188C14.1288 39.188 14.6608 39.034 15.1228 38.838L15.3328 39.72C14.8988 39.916 14.1568 40.154 13.0788 40.154C10.9928 40.154 9.74684 38.768 9.74684 36.724C9.74684 34.68 10.9508 33.07 12.9248 33.07C15.1368 33.07 15.7248 35.016 15.7248 36.262C15.7248 36.514 15.6968 36.71 15.6828 36.836ZM10.9368 35.954H14.5348C14.5488 35.17 14.2128 33.952 12.8268 33.952C11.5808 33.952 11.0348 35.1 10.9368 35.954ZM22.6965 36.836H17.9365C17.9645 38.502 19.0285 39.188 20.2605 39.188C21.1425 39.188 21.6745 39.034 22.1365 38.838L22.3465 39.72C21.9125 39.916 21.1705 40.154 20.0925 40.154C18.0065 40.154 16.7605 38.768 16.7605 36.724C16.7605 34.68 17.9645 33.07 19.9385 33.07C22.1505 33.07 22.7385 35.016 22.7385 36.262C22.7385 36.514 22.7105 36.71 22.6965 36.836ZM17.9505 35.954H21.5485C21.5625 35.17 21.2265 33.952 19.8405 33.952C18.5945 33.952 18.0485 35.1 17.9505 35.954ZM28.8842 30.06H30.1162V38.25C30.1162 38.852 30.1302 39.538 30.1722 40H29.0662L29.0102 38.824H28.9822C28.6042 39.58 27.7782 40.154 26.6722 40.154C25.0342 40.154 23.7742 38.768 23.7742 36.71C23.7602 34.456 25.1602 33.07 26.8122 33.07C27.8482 33.07 28.5482 33.56 28.8562 34.106H28.8842V30.06ZM28.8842 37.158V35.982C28.8842 35.828 28.8702 35.618 28.8282 35.464C28.6462 34.68 27.9742 34.036 27.0502 34.036C25.7762 34.036 25.0202 35.156 25.0202 36.654C25.0202 38.026 25.6922 39.16 27.0222 39.16C27.8482 39.16 28.6042 38.614 28.8282 37.69C28.8702 37.522 28.8842 37.354 28.8842 37.158ZM35.1753 30.564H36.3933V34.512H40.9573V30.564H42.1893V40H40.9573V35.576H36.3933V40H35.1753V30.564ZM49.7121 36.836H44.9521C44.9801 38.502 46.0441 39.188 47.2761 39.188C48.1581 39.188 48.6901 39.034 49.1521 38.838L49.3621 39.72C48.9281 39.916 48.1861 40.154 47.1081 40.154C45.0221 40.154 43.7761 38.768 43.7761 36.724C43.7761 34.68 44.9801 33.07 46.9541 33.07C49.1661 33.07 49.7541 35.016 49.7541 36.262C49.7541 36.514 49.7261 36.71 49.7121 36.836ZM44.9661 35.954H48.5641C48.5781 35.17 48.2421 33.952 46.8561 33.952C45.6101 33.952 45.0641 35.1 44.9661 35.954ZM51.2798 40V30.06H52.5118V40H51.2798ZM54.5884 42.772V35.436C54.5884 34.568 54.5604 33.868 54.5324 33.224H55.6384L55.6944 34.386H55.7224C56.2264 33.56 57.0244 33.07 58.1304 33.07C59.7684 33.07 61.0004 34.456 61.0004 36.514C61.0004 38.95 59.5164 40.154 57.9204 40.154C57.0244 40.154 56.2404 39.762 55.8344 39.09H55.8064V42.772H54.5884ZM55.8064 36.08V37.242C55.8064 37.424 55.8344 37.592 55.8624 37.746C56.0864 38.6 56.8284 39.188 57.7104 39.188C59.0124 39.188 59.7684 38.124 59.7684 36.57C59.7684 35.212 59.0544 34.05 57.7524 34.05C56.9124 34.05 56.1284 34.652 55.8904 35.576C55.8484 35.73 55.8064 35.912 55.8064 36.08ZM64.6031 37.312H63.5111L63.4831 36.948C63.3991 36.206 63.6511 35.366 64.3511 34.54C64.9811 33.784 65.3311 33.238 65.3311 32.608C65.3311 31.894 64.8831 31.418 64.0011 31.404C63.4971 31.404 62.9371 31.572 62.5871 31.838L62.2511 30.956C62.7271 30.62 63.5111 30.396 64.2531 30.396C65.8631 30.396 66.5911 31.39 66.5911 32.454C66.5911 33.406 66.0591 34.106 65.3871 34.89C64.7711 35.618 64.5471 36.248 64.5891 36.962L64.6031 37.312ZM64.0291 40.154H64.0151C63.5391 40.154 63.2031 39.776 63.2031 39.286C63.2031 38.768 63.5531 38.404 64.0431 38.404C64.5331 38.404 64.8691 38.768 64.8691 39.286C64.8691 39.776 64.5471 40.154 64.0291 40.154Z"
                              fill="#363636"
                            />
                            <path
                              d="M44.5002 14.2567C44.5002 7.85167 39.5302 3.5 34.0002 3.5C28.5285 3.5 23.5002 7.75833 23.5002 14.3267C22.8002 14.7233 22.3335 15.47 22.3335 16.3333V18.6667C22.3335 19.95 23.3835 21 24.6668 21C25.3085 21 25.8335 20.475 25.8335 19.8333V14.2217C25.8335 9.75333 29.2752 5.845 33.7435 5.71667C34.8371 5.68341 35.9262 5.87001 36.9463 6.2654C37.9665 6.66079 38.8969 7.25694 39.6824 8.01851C40.4679 8.78009 41.0925 9.69159 41.5193 10.699C41.946 11.7064 42.1662 12.7893 42.1668 13.8833V22.1667H34.0002C33.3585 22.1667 32.8335 22.6917 32.8335 23.3333C32.8335 23.975 33.3585 24.5 34.0002 24.5H42.1668C43.4502 24.5 44.5002 23.45 44.5002 22.1667V20.7433C45.1885 20.3817 45.6668 19.67 45.6668 18.83V16.1467C45.6668 15.33 45.1885 14.6183 44.5002 14.2567Z"
                              fill="#EB2188"
                            />
                            <path
                              d="M30.5002 16.3333C31.1445 16.3333 31.6668 15.811 31.6668 15.1667C31.6668 14.5223 31.1445 14 30.5002 14C29.8558 14 29.3335 14.5223 29.3335 15.1667C29.3335 15.811 29.8558 16.3333 30.5002 16.3333Z"
                              fill="#EB2188"
                            />
                            <path
                              d="M37.5002 16.3333C38.1445 16.3333 38.6668 15.811 38.6668 15.1667C38.6668 14.5223 38.1445 14 37.5002 14C36.8558 14 36.3335 14.5223 36.3335 15.1667C36.3335 15.811 36.8558 16.3333 37.5002 16.3333Z"
                              fill="#EB2188"
                            />
                            <path
                              d="M41 12.8683C40.7219 11.2282 39.8724 9.73929 38.6019 8.66528C37.3314 7.59126 35.722 7.00137 34.0584 7C30.5234 7 26.72 9.92833 27.0234 14.525C28.462 13.9363 29.7327 13.0007 30.722 11.8017C31.7113 10.6028 32.3886 9.1776 32.6934 7.65333C34.2217 10.7217 37.36 12.8333 41 12.8683Z"
                              fill="#EB2188"
                            />
                          </svg>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Slide;
