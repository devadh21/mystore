// import { deleteProductById } from "@/serverActions/deleteProductAction";
import { toast } from "sonner";
import { IProduct } from "@/typings/interfaces";


export default function ButtonEditPdt({
  setProduct,
  product,
  setShow

}: {
  setProduct: any;
  product: IProduct;
  setShow:any
}) {
  
  const handleEdit = (pdt: IProduct) => {
    setProduct(pdt)
    setShow(true)
  };
  return (
    <button
      onClick={() => handleEdit(product)}
      type="button"
      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Edit
    </button>
  );
}
