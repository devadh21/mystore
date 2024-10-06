// "use client";
// import { useRef, useState } from "react";
// import Image from "next/image";
// import { useContext } from "react";
// import MyContext from "@/context/CartContext";
// import NumberInput from "@compo/detailsProduct/ui/NumberInput";
// import { revalidatePath } from "next/cache"; 

// export default function ItemCart({ subtotal }: any) {
//   const { products, deleteToCart }: any = useContext(MyContext);

//   products.map((pdt: any, index: any) => {
//     const [quantity, setQuantity] = useState(1);
//     const [weight, setWeight] = useState("1 kg");
//     const refInput = useRef<HTMLInputElement>(null);

//     const total =
//       weight === "1 kg" ? pdt.price * quantity : pdt.half_kg * quantity;
//     subtotal = subtotal + total;

//     const handleDelete = () => {
//       deleteToCart({ idPdt: pdt.id });
//       revalidatePath("/cart");
//     };

//     return (
//       <div key={index} className="relative   my-4 w-full flex shadow-lg">
//         <div
//           className="absolute bg-primary rounded-full text-center  p-1 w-6 right-1 -top-2 cursor-pointer"
//           onClick={handleDelete}
//         >
//           X
//         </div>
//         <input className="hidden" ref={refInput} value={pdt.id}></input>
//         <div className="basis-1/3 flex justify-center items-center ">
//           <Image
//             alt="product img"
//             src={pdt.img_url}
//             width={70}
//             height={70}
//             objectFit="cover"
//             className="h-full w-2/3"
//           />
//         </div>

//         <div className="basis-2/3 flex flex-col  gap-3 w-full p-5">
//           <div className="flex flex-col items-center justify-between">
//             <div className="flex justify-between items-center w-full gap-2 py-4">
//               <span className="text-secondary2 text-2xl  text-center font-bold">
//                 {pdt.name}
//                 {pdt.id}
//               </span>
//               <div className="">
//                 <span className="text-[30px] text-green-700">
//                   {pdt.price} DH
//                 </span>
//               </div>
//             </div>
//             <div className="flex justify-between w-full ">
//               <span>Wieght:</span>
//               <div className="flex gap-4">
//                 <div className="flex flex-col sm:flex-row justify-between items-center gap-1">
//                   <input
//                     type="radio"
//                     id="one_kg"
//                     name="weight"
//                     value={"1 kg"}
//                     defaultChecked
//                     onChange={(e) => setWeight(e.target.value)}
//                     className="text-secondary bg-gray-100"
//                   />
//                   <label
//                     htmlFor="one_kg"
//                     className="sm:text-[13px] text-[12px]"
//                   >
//                     1 Kg = {pdt.price} DH
//                   </label>
//                 </div>
//                 <div className="flex flex-col  sm:flex-row justify-between items-center gap-1">
//                   <input
//                     type="radio"
//                     id="half_kg"
//                     name="weight"
//                     value={"1/2 kg"}
//                     onChange={(e) => setWeight(e.target.value)}
//                     className="text-secondary bg-gray-100"
//                   />
//                   <label
//                     htmlFor="half_kg"
//                     className="sm:text-[13px] text-[12px]"
//                   >
//                     1/2 Kg = {pdt.half_kg} DH
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/*  Quantity section */}
//           <div className="flex items-center justify-between py-4">
//             {/* <span className="font-bold">Quantity</span> */}
//             <div className="flex justify-between items-center gap-7 w-full ">
//               <span>Quantityaaa:</span>
//               <NumberInput setQuantity={setQuantity} quantity={quantity} />
//             </div>
//           </div>
//           <hr className=" bg-gray-300  border-1 mt-5" />
//           <div className="flex items-center justify-between py-4">
//             <div className="flex justify-between items-center gap-7 w-full ">
//               <span>Total:</span>
//               <span className="text-2xl font-bold">{total} DH</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   });
// }
