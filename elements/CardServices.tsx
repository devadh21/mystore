import Image from "next/image";

export default function CardServices({
  img_src,
  title,
  description,
}: {
  img_src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex-col py-4">
      <Image
        src={img_src}
        alt="Web Development"
        width={160}
        height={160}
        className=" p-2 border-2 border-secondary4  mx-auto polygon"
      />
      <h2 className=" capitalize text-center text-xl text-secondary2 p-3 ">
        {title}
      </h2>
      <p className="text-justify p-2 grow-0 ">{description}</p>
    </div>
  );
}
