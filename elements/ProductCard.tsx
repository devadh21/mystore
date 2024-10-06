"use client";
import React, { useContext } from "react";
import { toast } from "sonner";
import Image from "next/image";
import ButtonLink from "@/elements/ButtonLink";
import ButtonAction from "@/elements/ButtonAction";
import { addToCartSVG } from "@/elements/IconSvg/AddToCart";
import CartContext from "@/context/CartContext";

interface CardProps {
  id?: string;
  img: string;
  title: string;
  price: string;
  old_price: string;
  half_kg?: string;
  card_href: string;
}

const ProductCard: React.FC<CardProps> = ({
  id,
  img,
  title,
  price,
  old_price,
  half_kg,
  card_href,
}) => {
  //  use Context react
  const { products, setProducts, AddToCart }: any = useContext(CartContext);
  const handleAddToCart = () => {
    
    AddToCart({ id, img_url: img, name: title, price, old_price, half_kg });
    console.log("first",id, img, title, price, old_price, half_kg )
    // show notification
    toast.success("product successfuly added to cart!");

  };

  return (
    <div className="flex flex-col justify-center items-center  shadow-lg overflow-hidden  bg-white group  ">
      <div className=" h-full flex items-center">
        <Image
          src={img}
          alt="Product Image"
          width={190}
          height={190}
          className=""
        />
      </div>
      <h2 className="text-center p-2   uppercase text-lg">{title}</h2>
      <div className="  justify-center">
        <h2 className="text-center pt-1 line-through">{old_price} DH</h2>
        <h2 className="text-center pb-1 text-2xl font-bold line  ">
          {price} DH
        </h2>
      </div>
      <div className="my-4 px-4 flex justify-center items-center gap-2 w-full">
        <ButtonLink bt_href={card_href} label="Order Now " className="m-2 !w-full flex justify-center  " />
        <ButtonAction
          childrenn={<div className="w-5 ">{addToCartSVG}</div>}
          onClick={handleAddToCart}
          className=" !w-full flex justify-center !bg-secondary5 hover:!bg-secondary "
          title="Add To Cart"
        />
      </div>
    </div>
  );
};
export default ProductCard;
