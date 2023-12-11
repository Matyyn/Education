// import React, { useState } from "react";
// import RentalImg from "../assets/icons/offers/rental.svg";
// import DiscountImg from "../assets/icons/offers/discount.svg";
// import BookingImg from "../assets/icons/offers/booking.svg";

// export default function Offers() {
//   const [offers, setoffers] = useState([
//     {
//       title: "Equipment Rentals",
//       description:
//         "Rent affordable sports gear from our wide selection—no need to buy expensive equipment.",
//       image: RentalImg,
//     },
//     {
//       title: "X% Discount",
//       description: "Book your field now and enjoy an exclusive X% discount!",
//       image: DiscountImg,
//     },
//     {
//       title: "Priority Booking",
//       description:
//         "Secure your preferred field and time slot with priority booking privileges!",
//       image: BookingImg,
//     },
//     {
//       title: "Equipment Rentals",
//       description:
//         "Rent affordable sports gear from our wide selection—no need to buy expensive equipment.",
//       image: RentalImg,
//     },
//     {
//       title: "X% Discount",
//       description: "Book your field now and enjoy an exclusive X% discount!",
//       image: DiscountImg,
//     },
//     {
//       title: "Priority Booking",
//       description:
//         "Secure your preferred field and time slot with priority booking privileges!",
//       image: BookingImg,
//     },
//   ]);

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center gap-8 py-8">
//       <p className="text-center font-bold text-3xl text-custom-green-1">
//         Exclusive Offers and Rewards
//       </p>
//       <div className="container flex gap-[3%] flex-wrap mx-auto">
//         {offers.map((offer, index) => (
//           <div
//             key={index}
//             className="flex flex-col w-[80%] mx-auto sm:w-[47%] lg:w-[30%] items-center text-center bg-white mb-[3%] p-6 md:p-10 rounded-lg gap-3"
//             style={{
//               boxShadow: "0px 4px 4px 0px #00000040",
//             }}
//           >
//             <img src={offer.image} className="h-[110px] w-[110px]" />
//             <p className="font-bold text-lg">{offer.title}</p>
//             <p className="text-sm">{offer.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
