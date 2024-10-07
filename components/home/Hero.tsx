"use client"
import Image from "next/image";
import ButtonLink from "@/elements/ButtonLink";


export default function Hero() {
  return (
    <section className=" bg-white bg-[url('/img/background_hero1.png')]  bg-contain   ">
      <div className="container flex flex-col-reverse justify-around  sm:flex-row  ">
        <div className=" basis-1/2 flex flex-col justify-center p-4 ">
          <div className="relative">
            <div className="">
              <Image
                src="/img/bee_honey.png"
                alt="bee"
                height={900}
                width={900}
                className=""
              />
            </div>
          </div>
          <div className="pt-3 ">
            <p className=" select-none">
              Welcome to Honey Bee, your premium honey destination! Explore rare
              single-origin varieties and expertly crafted blends. Whether
              you're a connoisseur or enthusiast, we have the perfect honey for
              you. Experience nature's richness with us!{" "}
            </p>
          </div>
          <div className="mt-5">
            <ButtonLink bt_href="#" label="Shop Now" />
          </div>
        </div>
        <div className="relative basis-1/2 flex  justify-center p-4 ">
          <Image
            src="/img/hero_honey2.png"
            alt="honey  hero"
            width={1100}
            height={1100}
            priority={true}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
