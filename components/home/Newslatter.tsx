"use client";
import { useRef } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Toaster } from "sonner";
import newsLatterAction from "@/serverActions/newslatter/newsLatterAction";
import isEmailActions from "@/serverActions/newslatter/isEmailActions";

function Newslatter() {
    const ref_form = useRef<HTMLFormElement>(null);


  const handleNewslatter = async (formdata: FormData) => {
    const email = formdata.get("email") as string;
    if (email === "") {
        toast.error(`Please enter your email address`);
      return false;
    } else {
      const res = await isEmailActions(email);
      //verifie is  the email exist or not
      if (res?.isEmail) {
        toast.error(`Email Address already exist!`);
        return false;
      }

      try {
        await newsLatterAction(email);
        toast.success(`Subscribed Successfully!`);
        ref_form.current?.reset();
        

      } catch (err) {
        console.log(err);
        toast.error(`Something went wrong, Please Try Again Later.`);
      }
    }
  };

  return (
    <section className="bg-black">
      <div className="container !p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
          <div className="flex flex-col justify-center  gap-6 p-4 md:col-span-2 ">
            <h1 className="text-secondary5 text-2xl   font-bold  capitalize">
              newslatter sing up
            </h1>
            <p className="text-background">
              Stay in the sweet loop with our Honey Shop newsletter! Sign up now
              to receive exclusive updates, special offers, and buzzing news
              straight to your inbox. Don't miss out on the latest buzz –
              subscribe today!
            </p>

            <form action={handleNewslatter} ref={ref_form}>
              <input
                className="border-2 border-secondary5  w-1/2  "
                type="email"
                name="email"
                id=""
                placeholder="Your Email Address"
              />
              <button
                type="submit"
                className="style_btn mx-1 border-2 border-secondary5 !bg-secondary5 hover:!border-secondary4 hover:!bg-secondary4 !text-slate-900  "
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/img/newslatter_bee.png"
              alt="Newsletter"
              height={400}
              width={400}
              // objectFit="contain"
              className="p-4"
            />
          </div>
        </div>
      </div>
      <div className=" absolute">
        <Toaster position="top-center" richColors closeButton={true} />
      </div>
    </section>
  );
}

export default Newslatter;
