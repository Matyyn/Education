// import React, { useState } from "react";
// import LoginImg from "../assets/images/login-main.svg";
// import { Link, useNavigate } from "react-router-dom";

// export default function Signup() {
//   const navigate = useNavigate();

//   const [showCreateClub, setshowCreateClub] = useState(false);

//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [confirmPassword, setconfirmPassword] = useState("");
//   const [clubName, setclubName] = useState("");

//   const handleRegister = () => {
//     showCreateClub ? navigate("/manager/dashboard") : navigate("/");
//   };

//   return (
//     <div className="flex flex-wrap md:flex-nowrap py-4 min-h-screen">
//       <div className="w-[100%] md:w-[45%] lg:w-[50%] flex flex-col justify-center px-12 py-6 order-2 md:order-1">
//         <p className="text-custom-green-1 font-bold text-3xl">App name here</p>

//         <div className="w-[100%] lg:w-[80%] 2xl:w-[50%] m-auto max-w-[450px] h-[380px]">
//           <div className="flex justify-end">
//             <label className="relative inline-flex items-center cursor-pointer mt-5">
//               <input
//                 type="checkbox"
//                 value=""
//                 className="sr-only peer"
//                 checked={showCreateClub}
//                 onChange={() => setshowCreateClub(!showCreateClub)}
//               />
//               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 peer-checked:bg-custom-green-1"></div>
//             </label>
//           </div>
//           <div className="flex justify-between items-center">
//             <p className="text-2xl">Register</p>
//             <Link to="/login">
//               <p className="text-custom-green-1">login</p>
//             </Link>
//           </div>
//           <div className="flex flex-col gap-3 my-4">
//             <input
//               value={name}
//               onChange={(e) => setname(e.target.value)}
//               type="text"
//               className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//               placeholder="Full Name"
//             />
//             <input
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//               type="email"
//               className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//               placeholder="Email"
//             />
//             <input
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               type="password"
//               className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//               placeholder="Password"
//             />
//             <input
//               value={confirmPassword}
//               onChange={(e) => setconfirmPassword(e.target.value)}
//               type="password"
//               className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//               placeholder="Re-enter Password"
//             />
//             {showCreateClub && (
//               <input
//                 value={clubName}
//                 onChange={(e) => setclubName(e.target.value)}
//                 type="text"
//                 className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//                 placeholder="Club Name"
//               />
//             )}
//             <button
//               className="bg-custom-green-1 text-white rounded-md py-2 mt-4"
//               onClick={handleRegister}
//             >
//               {showCreateClub ? "Create Club Account" : "Register"}
//             </button>
//           </div>
//         </div>
//         <p>©AppName, All rights Reserved</p>
//       </div>
//       <div className="w-[100%] md:w-[55%] lg:w-[50%] order-1 md:order-2 hidden md:block">
//         <div className="w-full h-full">
//           <div className="bg-white h-full p-12 mx-5 sm:mx-12 rounded-lg flex flex-col justify-center">
//             <div className="max-w-[700px] mx-auto flex flex-col justify-center gap-16">
//               <div className=" flex flex-col justify-between">
//                 <div className="text-center">
//                   <p className="text-2xl font-bold">
//                     Create an account and get started!
//                   </p>
//                   <p className="sm:px-5 pt-2 text-sm">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Maxime mollitia, molestiae quas vel sint commodi repudiandae
//                   </p>
//                 </div>
//               </div>
//               <img src={LoginImg} className="w-full max-w-[550px] mx-auto" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
