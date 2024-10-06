"use client";

import { Fragment, useState } from "react";
import { ICustomer } from "@/typings/interfaces";
import { Toaster } from "sonner";
import ButtonDeleteCustomer from "@compo/admi/ui/customers/ButtonDeleteCustomer";
import ButtonEditCustomer from "@compo/admi/ui/customers/ButtonEditCustomer";
import ModalEditCustomer from "@/components/admi/ui/customers/ModalEditCustomer";
import ModalDeleteCustomer from "@/components/admi/ui/customers/ModalDeleteCustomer";

export default function TablesCustomers({ customers }: { customers: ICustomer[] }) {
  const [customer, setCustomer] = useState<ICustomer>(); //  Customer selected to show in the modal.
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
              Full name
            </th>
            <th scope="col" className="px-6 py-3">
              Adress
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Weight
            </th>
            <th scope="col" className="px-6 py-3">
              Totol price
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
          {customers?.map((customer) => {
            // convert img_url to array
            // const arr = product?.img_url.split(",");  
            return(
              <Fragment key={customer.id}>
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

                <td className="px-6 py-4">{customer.full_name}</td>
                <td className="px-6 py-4">{customer.adress}</td>
                <td className="px-6 py-4">{customer.phone}</td>
                <td className="px-6 py-4">{customer.product}</td>
                <td className="px-6 py-4">{customer.quantity}</td>
                <td className="px-6 py-4">{customer.weight}</td>
                <td className="px-6 py-4">{customer.total_price}</td>
                <td className="px-6 py-4">{customer.created_at}</td>
                <td className="px-6 py-4 flex">
                  <ButtonEditCustomer
                    customer={customer}
                    setCustomer={setCustomer}
                    setShow={setShowModalEdit}
                  />
                  <ButtonDeleteCustomer
                    customer={customer}
                    setCustomer={setCustomer}
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
      {showModalEdit && <ModalEditCustomer customer={customer} setShowModalEdit={setShowModalEdit} />}
      {showModalDelete && <ModalDeleteCustomer customer={customer} setShowModalDelete={setShowModalDelete}   />}
    </>
  );
}
