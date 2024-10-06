"use client";
import { useRef } from "react";
import { toast } from "sonner";
import { editProduct } from "@/serverActions/editProductActions";
import { IProduct } from "@/typings/interfaces";
import cloudinaryUploadAction from "@/serverActions/cloudinaryUploadAction";
import cloudinary from "@/cloudinaryconfig";
import ButtonAction from "@/components/admi/ui/ButtonAction";
import React from "react";

export default function ModalEditProduct({
  pdt,
  setShowModalEdit,
}: {
  pdt: IProduct | any;
  setShowModalEdit: any;
}) {
  const formRef = useRef<HTMLFormElement>(null); // ref of order comfirm form

  const handleForm = async (formdata: FormData) => {
    const file_img = formdata.get("img_url") as File;
    const pdt_name = formdata.get("name") as File;
    // // cloudinary.uploader.rename("products/" + pdt?.name, "new_name")
    // cloudinary.uploader
    //   .rename("products/" + pdt?.name, "grand_canyon",{type: "upload"})
    //   // cloudinary.uploader.explicit('products/'+pdt?.name,{type: "upload"})
    //   .then((result) => console.log("result", result));
    

    

    if (file_img.name) {
      if (pdt_name !== pdt?.name) {
        await cloudinary.uploader.destroy("products/" + pdt?.name);
        // await cloudinary.uploader.resource('sample')
        // .then(result=>console.log(result));
      }
      const secure_url = await cloudinaryUploadAction(formdata);
      formdata.delete("img_url"); // delete old img_url
      formdata.append("img_url", secure_url); // add new  image path to formdata.
    } else {
      formdata.delete("img_url"); // delete file img
      formdata.append("img_url", pdt?.img_url); //  conserving old image url in formdata.
    }

    await editProduct(formdata);
    // reset form
    formRef.current?.reset();

    // close modal
    setShowModalEdit(false);

    // show notification
    toast.success("Your product successfully updated!");
  };

  return (
    <>
      {/* Main modal */}
      <div
        tabIndex={-1}
        aria-hidden="true"
        className=" bg-black bg-opacity-70 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Product
              </h3>
              <button
                onClick={() => {
                  setShowModalEdit(false);
                }}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form
              ref={formRef}
              className="max-w-sm mx-auto py-4"
              action={handleForm}
            >
              <div className="mb-5">
                <input
                  type="text"
                  name="product_id"
                  value={pdt?.id}
                  readOnly
                  hidden
                />
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  defaultValue={pdt?.name}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  defaultValue={pdt?.price}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Old Price
                </label>
                <input
                  type="number"
                  name="old_price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  defaultValue={pdt?.old_price}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price Half kg
                </label>
                <input
                  type="number"
                  name="half_kg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  defaultValue={pdt?.half_kg}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="img_url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo
                </label>
                <input
                  type="file"
                  name="img_url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <ButtonAction title='Update  Product'/>
              <button
                type="button"
                className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  setShowModalEdit(false);
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
