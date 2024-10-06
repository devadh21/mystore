"use client";
import { nav_items } from "@/data/navItems";

import ButtonLink from "@/elements/ButtonLink";
import { usePathname } from "next/navigation";

import Logo from "@compo/header/Logo";
import { useRef, useState } from "react";
import Link from "next/link";

import React, { useContext } from "react";
import CartContext from "@/context/CartContext";

export default function Navbar() {
  const [routeActive, setRouteActive] = useState("");

  const mobile_menu = useRef<HTMLDivElement>(null);
  const mobile_menu_ul = useRef<HTMLUListElement>(null);
  const bgMenuMobile = useRef<HTMLDivElement>(null);
  const icon_menu = useRef<HTMLDivElement>(null);

  // Use Context react
  const { nbrItems }: any = useContext(CartContext);

  // hidden navBar in Administartion
  const path = usePathname();
  const classN = path.includes("/admin") ? "bg-background hidden " : "";

  const handleCloseMenu = () => {
    if (mobile_menu.current) {
      mobile_menu.current?.classList.toggle("-top-72");
      mobile_menu.current?.classList.toggle("top-0");
      icon_menu.current?.classList.toggle("hidden");
      bgMenuMobile.current?.classList.toggle("hidden");
    }
  };
  const handleShowMenu = () => {
    if (mobile_menu.current) {
      mobile_menu.current?.classList.toggle("-top-72");
      mobile_menu.current?.classList.toggle("top-0");
      icon_menu.current?.classList.toggle("hidden");
      bgMenuMobile.current?.classList.toggle("hidden");
    }
  };
  // const menu_clicked = path.ch;

  console.log("routeActive", routeActive);

  return (
    <nav className={`  ${classN}`}>
      <div className="relative container flex  md:justify-between  items-center bg-secondary5  px-4 !py-2   shadow-lg ">
        {/* logo element */}
        <div className="">
          <Logo />
        </div>
        <div className="flex items-center justify-end w-2/5  grow md:mr-0 mr-16">
          <ul className="md:flex lg:justify-between gap-1 hidden ">
            {
              /* map through the links and create a list item for each one of them */
              nav_items.map((item, index) => {
                const actived =
                  routeActive === `${item.href}`
                    ? "border-b-2 border-b-secondary2 "
                    : "";

                return (
                  <div className="" onClick={(e) => setRouteActive(item.href)}>
                    <div key={item.id}>
                      <ButtonLink
                        bt_href={item.href}
                        label={item.label}
                        className={` transition-all duration-300 !bg-transparent  border-b-2 border-b-transparent hover:border-b-2  hover:border-b-secondary2 !text-secondary2 ${actived}`}
                      />
                    </div>
                  </div>
                );
              })
            }
          </ul>
          {/* cart */}
          <Link
            href={"/cart"}
            className="transition-all duration-300 !w-8 hover:!w-9 md:!w-5 md:hover:!w-6 !relative "
            title="Show Cart"
          >
            <svg
              version="1.1"
              fill="#762008"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 122.9 107.5"
            >
              <g>
                <path d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z" />
              </g>
            </svg>
            <p className="p-1 font-bold text-sm -top-3 -right-3 text-center absolute  text-secondary2  ">
              {nbrItems || 0}
            </p>
          </Link>
          {/* Login */}
          <Link
            href={"/admin"}
            className="ml-6 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
            title="Login"
          >
            <div className=" bg-secondary2/70 w-3 h-3 rounded-full "></div>
            <div className=" bg-secondary2/70 w-5 h-3 rounded-t-full "></div>
            <div className=""></div>
          </Link>

          {/* icon humborger menu */}
          <div
            className="absolute right-5  md:hidden text-secondary4 "
            onClick={handleShowMenu}
            ref={icon_menu}
          >
            <svg
              className="w-11 h-11"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="-top-72 transition-all ease-in-out  duration-1000  fixed bg-black/30 backdrop-blur-sm w-full z-20 flex justify-center p-2 "
        ref={mobile_menu}
      >
        <ul
          className=" relative flex flex-col justify-between gap-1   w-2/3 "
          ref={mobile_menu_ul}
        >
          <span
            className="absolute -right-7  p-2   bg-secondary4 hover:bg-secondary2 w-fit  "
            onClick={handleCloseMenu}
          >
            x
          </span>
          {
            /* map through the links and create a list item for each one of them */
            nav_items.map((item, index) => {
              // const active = path === `${item.href}` ? "!bg-secondary2" : "";
              return (
                <div
                  className=" flex flex-col justify-between gap-1"
                  onClick={handleCloseMenu}
                >
                  <div key={item.id}>
                    <ButtonLink
                      bt_href={item.href}
                      label={item.label}
                      className="!w-full"
                    />
                  </div>
                </div>
              );
            })
          }
          {/* <ButtonLink bt_href="/" label="Home" className="!w-full" />
          <ButtonLink
            bt_href="/#products"
            label="Products"
            className="  !w-full"
          />
          <ButtonLink
            bt_href="/#about_us"
            label="About Us"
            className="!w-full"
          />
          <ButtonLink bt_href="/#why_us" label="Why Us" className="!w-full" /> */}
          {/* <ButtonLink bt_href="#"           title="Shop New"  className="!w-full" /> */}
        </ul>
      </div>
      {/* menu for mobile screen  */}
      <div
        className="hidden fixed  w-screen h-[190%]  z-10"
        onClick={handleCloseMenu}
        ref={bgMenuMobile}
      ></div>
    </nav>
  );
}
