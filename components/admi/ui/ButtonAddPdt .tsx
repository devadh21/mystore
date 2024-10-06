"use client"

export default function ButtonAddPdt({setShow}:any) {
  return (
    <button
    className="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    onClick={()=>{setShow(true)}}
  >
    + Add Product
  </button>
  );
}
