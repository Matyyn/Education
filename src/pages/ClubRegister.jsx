// import React from "react";
// // import LoginImg from "../assets/images/login-main.svg";
// import { Link, useNavigate } from "react-router-dom";

// export default function ClubRegister() {
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     navigate("/");
//   };

//   return (
//     <div className="flex flex-wrap md:flex-nowrap py-4 min-h-screen">
//       <div className="w-[100%] md:w-[45%] lg:w-[50%] flex flex-col justify-center px-12 py-6 order-2 md:order-1">
//         <p className="text-custom-green-1 font-bold text-3xl">App name here</p>

//         <div className="w-[100%] lg:w-[80%] 2xl:w-[50%] m-auto max-w-[450px]">
//           <div className="flex justify-between items-center">
//             <p className="text-2xl">Club Account</p>
//           </div>
//           <div className="flex flex-col gap-3 my-4">
//             <input
//               type="text"
//               className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//               placeholder="Full Name"
//             />
//             <input
//               type="text"
//               className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//               placeholder="Club Name"
//             />
//             <input
//               type="text"
//               className="bg-custom-light-2 p-2 focus:outline-none rounded-md"
//               placeholder="Password for confirmation"
//             />

//             <button
//               className="bg-custom-green-1 text-white rounded-md py-2 mt-4"
//               onClick={handleRegister}
//             >
//               Create Club
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
