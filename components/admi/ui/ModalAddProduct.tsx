"use client";
import { useRef,useState } from "react";
import ButtonAction from "@/components/admi/ui/ButtonAction";

import { toast } from "sonner";
import { addNewProduct } from "@/serverActions/addNewProductActions";

import cloudinaryUploadAction from "@/serverActions/cloudinaryUploadAction";

export default function ModalAddProduct({ setShow }: any) {
  const formRef = useRef<HTMLFormElement>(null); // ref of order comfirm form
  const [images, setImages] = useState([]);
  const handleFileChange = (e:any) => {
    const files:never[] = Array.from(e.target.files);
    setImages(files);
  };
  // console.log("zzae",images[0]);
  // for (let index = 0; index < images.length; index++) {
  //   const element = images[index];
  //   console.log("first",element)
    
  // }

  const handleForm = async (formdata: FormData) => {

    // console.log("zzae",images);
    // Upload  image to Cloudinary
    const image_name = formdata.get("name") as string; // get product name .
    let images_url:any =[]

    for (let index = 0; index < images.length; index++) {
      const element = images[index];
      const formdata = new FormData()
      formdata.append("img_url", element);
      formdata.append("name", `${image_name}_${index}`);

      const secure_url = await cloudinaryUploadAction(formdata);
      images_url =  [...images_url ,secure_url ];      
    }
    
    formdata.delete("img_url"); // delete old img_url
    formdata.append("img_url", images_url); // add new url external of image uploaded to formdata.

    // await cloudinary.uploader.destroy("products/file_mfpogu");

    await addNewProduct(formdata);
    // reset form
    formRef.current?.reset();
    // close modal
    setShow(false);

    // show notification
    toast.success("Your product successfuly added!");
  };

  return (
    <>
      {/* Main modal */}
      <div
        tabIndex={-1}
        className=" bg-black bg-opacity-70 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full justify-center">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Product
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setShow(false);
                }}
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
                  multiple
                  onChange={handleFileChange}
                  name="img_url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <ButtonAction title='Add  Product'/>
                <button
                  type="button"
                  className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setShow(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
