"use client";
import React,{ useContext, useState, useRef } from "react";
import { Toaster } from "sonner";
import { toast } from "sonner";

import ButtonAction from "@/elements/ButtonAction";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import Link from "next/link";
import ModalComfirm from "@compo/detailsProduct/ModalComfirm";
import { confirmOrderCartAction } from "@/serverActions/cart/confirmOrderCartAction";
import { IshippingInfo} from "@/typings/interfaces";

export default function Cart() {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // ref of order comfirm form

  //  use Context react
  const { cartItems, AddToCart, deleteToCart, getCartTotal }: any =
    useContext(CartContext);

  function weightOneKg(pdt: any) {
    const newweight = "1 kg";
    const item = { ...pdt, weight: newweight };
    AddToCart({ ...item });
  }

  function weightHalfKg(pdt: any) {
    const newweight = "1/2 kg";
    const item = { ...pdt, weight: newweight };
    AddToCart({ ...item });
  }
  function increaseQty(pdt: any) {
    const newQty = pdt?.quantity + 1;
    const item = { ...pdt, quantity: newQty };
    AddToCart({ ...item });
  }

  function decreaseQty(pdt: any) {
    const newQty = pdt?.quantity - 1;
    const item = { ...pdt, quantity: newQty };
    AddToCart({ ...item });
  }

  const confirmOrder = async (formdata: FormData) => {
    const shippingInfo: IshippingInfo = {
      full_name: formdata.get("full_name"),
      phone: formdata.get("phone"),
      adress: formdata.get("adress"),
    };

    await confirmOrderCartAction(shippingInfo, cartItems);
    // reset form
    formRef.current?.reset();

    // show notification
    toast.success("Your order successfuly comfirmed!");

    //close modale
    setShowModal(false);
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className=" text-center w-full shadow-lg ">
          No products in cart yet.{" "}
          <Link href={"/"} className="text-lg text-secondary">
            Shop now!
          </Link>
        </div>
      ) : (
        <div className=" flex flex-col sm:flex-row w-full shadow-lg ">
          <div className="basis-2/3 flex flex-col ">
            {cartItems.map((pdt: any, index: any) => {
              const isCheckedOneKg = pdt.weight === "1 kg" ? true : false;
              const isCheckedhalfKg = pdt.weight === "1/2 kg" ? true : false;

              const handleDelete = () => {
                deleteToCart({ idPdt: pdt.id });
                // show notification
                toast.warning("product successfuly deleted to cart!");
              };
              return (
                <div
                  key={index}
                  className="relative   my-4 w-full flex shadow-lg"
                >
                  <div
                    onClick={handleDelete}
                    className="absolute hover:bg-primary rounded-full text-center  p-1 w-6 right-1 -top-2 cursor-pointer"
                  >
                    X
                  </div>
                  <div className="basis-1/3 flex justify-center items-center ">
                    <Image
                      alt="product img"
                      src={pdt.img_url}
                      width={70}
                      height={70}
                      objectFit="cover"
                      className="h-full w-2/3"
                    />
                  </div>

                  <div className="basis-2/3 flex flex-col  gap-3 w-full p-5">
                    <div className="flex flex-col items-center justify-between">
                      <div className="flex justify-between items-center w-full gap-2 py-4">
                        <span className="text-secondary2 text-2xl  text-center font-bold">
                          {pdt.name}
                        </span>
                        <div className="">
                          <span className="text-2xl text-green-700">
                            {pdt.price} DH
                          </span>
                          <span className="text-md line-through text-red-700 mx-2">
                            {pdt.old_price} DH
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between w-full ">
                        <span>Wieght:</span>
                        <div className="flex gap-4">
                          <div className="flex flex-col sm:flex-row justify-between items-center gap-1">
                            <input
                              type="radio"
                              id={"one_kg_" + pdt.id}
                              name={"weight_" + pdt.id}
                              checked={isCheckedOneKg}
                              onChange={(e) => weightOneKg(pdt)}
                              className="text-secondary bg-gray-100"
                            />
                            <label
                              htmlFor={"one_kg_" + pdt.id}
                              className="sm:text-[13px] text-[12px]"
                            >
                              1 Kg = {pdt.price} DH
                            </label>
                          </div>
                          <div className="flex flex-col  sm:flex-row justify-between items-center gap-1">
                            <input
                              type="radio"
                              id={"half_kg_" + pdt.id}
                              name={"weight_half_" + pdt.id}
                              checked={isCheckedhalfKg}
                              onChange={(e) => weightHalfKg(pdt)}
                              className="text-secondary bg-gray-100"
                            />
                            <label
                              htmlFor={"half_kg_" + pdt.id}
                              className="sm:text-[13px] text-[12px]"
                            >
                              1/2 Kg = {pdt.half_kg} DH
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-4">
                      <div className="flex justify-between items-center gap-7 w-full ">
                        <span>Quantity:</span>
                        <div className="">
                          <div className="relative flex items-center max-w-[8rem]">
                            <button
                              type="button"
                              id="decrement-button"
                              data-input-counter-decrement="quantity-input"
                              className="bg-primary dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-200 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none "
                              {...(pdt.quantity === 1
                                ? { disabled: true }
                                : {})}
                              onClick={(e) => decreaseQty(pdt)}
                            >
                              <svg
                                className="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <input
                              type="text"
                              id="quantity-input"
                              data-input-counter
                              aria-describedby="helper-text-explanation"
                              className="bg-primary border-x-0 border-gray-200 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                              value={pdt.quantity}
                              disabled
                            />
                            <button
                              type="button"
                              id="increment-button"
                              data-input-counter-increment="quantity-input"
                              className="bg-primary dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-200 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                              onClick={(e) => increaseQty(pdt)}
                            >
                              <svg
                                className="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className=" bg-gray-300  border-1 mt-5" />
                    <div className="flex items-center justify-between py-4">
                      <div className="flex justify-between items-center gap-7 w-full ">
                        <span>Total:</span>
                        <span className="text-2xl font-bold">
                          {pdt.total_price} DH
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="basis-1/3  ">
            <div className="bg-background p-6">
              <h1 className="text-secondary4 text-lg pb-4  capitalize font-bold">
                Order summary{" "}
              </h1>
              <div className="flex justify-between items-center py-4">
                <span className="font-bold">Subtotal:</span>
                <span className="font-bold">{getCartTotal()}</span>
              </div>
              <div className="flex justify-between items-center ">
                <span>Delivery Charge:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="font-bold">Order Total:</span>
                <span className="text-[22px] font-bold">{getCartTotal()}</span>
              </div>
              <div className="flex justify-center w-full mt-8">
                <ButtonAction
                  label="Order Now"
                  className="!w-full"
                  onClick={setShowModal}
                />
              </div>
            </div>
          </div>
          <div className=" absolute">
            <Toaster position="top-center" richColors closeButton={true} />
          </div>
          {/*start shopping info Form */}
          {showModal && (
            <ModalComfirm
              setShowModal={setShowModal}
              formRef={formRef}
              confirmOrder={confirmOrder}
            />
          )}
        </div>
      )}
    </>
  );
}
