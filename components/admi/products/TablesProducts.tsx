"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { IProduct } from "@/typings/interfaces";
import { Toaster } from "sonner";
import ButtonDeletePdt from "@compo/admi/ui/ButtonDeletePdt";
import ButtonEditPdt from "@compo/admi/ui/ButtonEditPdt ";
import ModalEditProduct from "@/components/admi/ui/ModalEditProduct";
import ModalDeleteProduct from "@/components/admi/ui/ModalDeleteProduct";

export default function TablesProducts({ products }: { products: IProduct[] }) {
  const [product, setProduct] = useState<IProduct>(); //  Product selected to show in the modal.
  const [showModalEdit, setShowModalEdit] = useState(false); // state for show and hidden modal edit
  const [showModalDelete, setShowModalDelete] = useState(false); // state for show and hidden modal delete
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-center text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              image
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Half Kg
            </th>
            <th scope="col" className="px-6 py-3">
              Old Price
            </th>
            <th scope="col" className="px-6 py-3"> 
              Created at
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            // convert img_url to array
            const arr = product?.img_url.split(",");  
            return(
              <Fragment key={product.id}>
              <tr className="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    src={arr[0]}
                    alt="Honey Orange Logo"
                    width={40}
                    height={40}
                  />
                </th>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.half_kg}</td>
                <td className="px-6 py-4">{product.old_price}</td>
                <td className="px-6 py-4">{product.created_at}</td>
                <td className="px-6 py-4">
                  <ButtonEditPdt
                    product={product}
                    setProduct={setProduct}
                    setShow={setShowModalEdit}
                  />
                  <ButtonDeletePdt
                    product={product}
                    setProduct={setProduct}
                    setShowModalDelete={setShowModalDelete}
                  />
                  {/* <button type="button" onClick={()=>{setProduct(product); setShowModalDelete(true)}}>Delete</button> */}
                </td>
              </tr>
            </Fragment> 
            )
                })}
        </tbody>
      </table>
      <div className=" absolute">
        <Toaster position="top-center" richColors closeButton={true} />
      </div>
      {showModalEdit && <ModalEditProduct pdt={product} setShowModalEdit={setShowModalEdit} />}
      {showModalDelete && <ModalDeleteProduct pdt={product} setShowModalDelete={setShowModalDelete}   />}
    </>
  );
}
