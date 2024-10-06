"use client";
import { useEffect, useState, useRef } from "react";
import OrderSummary from "@compo/detailsProduct/OrderSummary";
import { useParams } from "next/navigation";
import LoandingOrder from "@/components/detailsProduct/ui/LoandingOrder";
import { toast, Toaster } from "sonner";
import { confirmOrderAction } from "@/serverActions/confirmOrderAction";

import { IProduct, IOrderSummaryData } from "@/typings/interfaces";
import ModalComfirm from "@compo/detailsProduct/ModalComfirm";

function OrderProductSection() {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<IProduct | undefined>();
  const [OrderSummaryData, setOrderSummaryData] = useState<IOrderSummaryData>({
    quantity: 1,
    weight: "1 kg",
  });

  const formRef = useRef<HTMLFormElement>(null); // ref of order comfirm form

  //Retrieve "id" param to the url
  const { id } = useParams();

  const getProductById = async () => {
    try {
      const res = await fetch(`/api/products/honey/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "1234567890abcdefghijklmnopqrstuvwxyz",
        },
      });
      if (!res.ok) throw new Error("Failed to fetch product");
      const product = await res.json();

      if (product) {
        setProduct(product.data);

        // Set product name in order summary data
        setOrderSummaryData({
          ...OrderSummaryData,
          product: product.data.name,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  const handleInputOrderSummary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderSummaryData({
      ...OrderSummaryData,
      [e.target.name]: e.target.value,
    });
  };

  // function for calculate  total price of the order if weight equal 1 kg or 1/2 kg.
  const calculatePrice = () => {
    const price = product?.price ?? "0"; // Fallback to "0" if undefined
    const halfKgPrice = product?.half_kg ?? "0"; // Fallback to "0" if undefined

    let totalPrice: number;

    if (OrderSummaryData.weight === "1 kg") {
      totalPrice = quantity * parseInt(price);
    } else {
      totalPrice = quantity * parseInt(halfKgPrice);
    }

    // set total Price and quantity to OrderSummaryData
    OrderSummaryData.total_price = totalPrice;
    OrderSummaryData.quantity = quantity;

    return totalPrice.toFixed(2);
  };
  // console.log("OrderSummaryData",OrderSummaryData)

  const confirmOrder = async (formdata: FormData) => {
    const confirmOrderData2 = {
      full_name: formdata.get("full_name"),
      phone: formdata.get("phone"),
      adress: formdata.get("adress"),
    };

    await confirmOrderAction(confirmOrderData2, OrderSummaryData);

    // reset form
    formRef.current?.reset();

    // show notification
    toast.success("Your order successfuly comfirmed!");
  };

  return (
    <div className="flex flex-col lg:flex-row    gap-4 p-4  ">
      {/* Start Order Summary */}
      {!product && <LoandingOrder />}
      {product && (
        <OrderSummary
          quantity={quantity}
          setQuantity={setQuantity}
          product={product}
          handleInputOrderSummary={handleInputOrderSummary}
          calculatePrice={calculatePrice}
          setShowModal={setShowModal}
        />
      )}
      {/* End Order Summary */}

      {/*start Order Comferm Form */}
      {showModal && (
        <ModalComfirm
          setShowModal={setShowModal}
          formRef={formRef}
          confirmOrder={confirmOrder}
        />
      )}
      {/*End Order Confirm Form*/}

      {/* Start Notification of comfirm order */}
      <div className=" absolute">
        <Toaster position="top-center" richColors closeButton={true} />
      </div>
    </div>
  );
}

export default OrderProductSection;
