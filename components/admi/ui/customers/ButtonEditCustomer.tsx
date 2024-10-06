// import { deleteProductById } from "@/serverActions/deleteProductAction";
import { toast } from "sonner";
import { ICustomer } from "@/typings/interfaces";


export default function ButtonEditCustomer({
  setCustomer,
  customer,
  setShow

}: {
  setCustomer: any;
  customer: ICustomer;
  setShow:any
}) {
  
  const handleEdit = (pdt: ICustomer) => {
    setCustomer(pdt)
    setShow(true)
  };
  return (
    <button
      onClick={() => handleEdit(customer)}
      type="button"
      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Edit
    </button>
  );
}
