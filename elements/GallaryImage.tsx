import Image from "next/image";
import React from "react";

export default function GallaryImage({ images }: { images: string[] }) {
  const [active, setActive] = React.useState(images[0]);

  return (
    <div className="flex  justify-center gap-4">
      <div className="flex justify-center ">
        <Image
          className=" rounded-lg object-cover object-center "
          src={active}
          width={480}
          height={480}
          priority
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-around gap-2 mt-4">
        {images.map((imgelink, index) => (
          <div key={index} className="">
            <Image
              onClick={() => setActive(imgelink)}
              src={imgelink}
              width={65}
              height={95}
              className="h-40 max-w-full cursor-pointer rounded-lg object-cover object-center "
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
