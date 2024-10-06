import Image from "next/image";
import React from "react";

export default function CardWhyUs({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  p-4 bg-white shadow-lg ">
      <div className="flex justify-center items-center  p-1">
        <Image
          src={img}
          alt={title}
          width={160}
          height={160}
          className="p-2 border-2 border-secondary4 polygon mx-auto "
        />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="capitalize text-xl text-center md:text-left text-secondary1 p-2">
          {title}
        </h2>
        <p className="text-justify md:text-left">{description}</p>
      </div>
    </div>
  );
}
