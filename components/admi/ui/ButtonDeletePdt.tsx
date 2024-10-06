"use client"
import { deleteProductById } from "@/serverActions/deleteProductAction";
import { toast } from "sonner";
import { IProduct } from "@/typings/interfaces";


export default function ButtonDeletePdt({
  setProduct,
  product,
  setShowModalDelete

}: {
  setProduct: any;
  product: IProduct;
  setShowModalDelete:any
}) {
  const handleDelete = (pdt: IProduct) => {
    setProduct(pdt)
    setShowModalDelete(true)
  };
  const deleteProduct =
    (PRODUCTID: string, PORODUCTNAME: string) => async () => {
      try {
        const res: any = await deleteProductById(PRODUCTID);
        // show notification
        toast.error(`${PORODUCTNAME} has been deleted!`);
      } catch (e) {
        console.log("Error: ", e);
      }
    };
  return (
    <button
      type="button"
      onClick={() => handleDelete(product)}
      // onClick={deleteProduct(productId, productName)}
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      Deletee
    </button>
  );
}
