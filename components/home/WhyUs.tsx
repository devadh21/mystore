"use client";
import { why_us } from "@/data/whyUs";

import CardWhyUs from "@/elements/CardWhyUs";

export default function WhyUs() {
  return (
    <section className=" bg-background " id="why_us">
      <div className="container !py-20">
        <h1 className="text-secondary2 text-4xl  text-center font-bold pt-4">
          Why Us
        </h1>
        <h2 className="text-center  text-secondary4 pb-4  capitalize font-bold ">
          poeple why choose our products
        </h2>
        <p className="text-justify px-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          doloribus id asperiores. Nesciunt tenetur in corrupti minus iure
          maiores, ad, id asperiores hic molestias quo soluta ullam dolor beatae
          tempore!
        </p>
        <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 sm:grid-cols-2 p-3 ">
          {why_us.map((i: any, index: number) => (
            <CardWhyUs
              key={index}
              title={i.title}
              description={i.description}
              img={i.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
