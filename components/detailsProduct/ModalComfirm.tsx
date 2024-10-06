"use client";
import { deleteProductById } from "@/serverActions/deleteProductAction";
import { toast } from "sonner";
import { IProduct } from "@/typings/interfaces";
import OrderComfirmForm from "@compo/detailsProduct/OrderComfirmForm";
import { Fragment } from "react";

export default function ModalComfirm({
  setShowModal,
  confirmOrder,
  formRef,
}: {
  setShowModal: any;
  confirmOrder: any;
  formRef: any;
}) {
  return (
    <div
      tabIndex={-1}
      className="   bg-black bg-opacity-70 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-2/3  max-h-full z-50">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setShowModal(false)}
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
          <div className="p-4 md:p-5 text-center">
            <OrderComfirmForm formRef={formRef} confirmOrder={confirmOrder} />
          </div>
        </div>
      </div>
    </div>
  );
}
