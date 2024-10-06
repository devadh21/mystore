import React from 'react'
import BtnComfirmOrder from "@/components/detailsProduct/ui/BtnComfirmOrder";
function OrderComfirmForm({ confirmOrder, formRef }: any) {
  return (
    <>
      <form
        ref={formRef}
        className=" flex flex-col w-full  gap-4 rounded-lg shadow-lg p-6 border-2 border-secondary"
        // onSubmit={confirmOrder}
        action={confirmOrder}
      >
        <h1 className="flex justify-center">Shipping information</h1>
        <hr className="bg-gray-300  border-2" />
        <div className="flex flex-col gap-2">
          <label htmlFor="full_name" className="text-start">Full Name</label>
          <input
            type="text"
            id="name"
            name="full_name"
            placeholder="Enter your full name..."
            className="text-gray-600 border-gray-300 focus:outline-secondary bg-transparent "
            required
          />
          <label htmlFor="phone" className="text-start">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone..."
            className="text-gray-600 border-gray-300 focus:outline-secondary bg-transparent"
            required
          />
          <label htmlFor="adress" className="text-start">Adress</label>        
          <input
            type="text"
            id="adress"
            name="adress"
            placeholder="Enter your adress..."
            className="text-gray-600 border-gray-300 focus:outline-secondary bg-transparent"
            required
          />
        </div>
        <div >
          <BtnComfirmOrder />
        </div>
      </form>
    </>
  );
}

export default OrderComfirmForm;
