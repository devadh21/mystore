import { useContext } from "react";
import NumberInput from "@compo/detailsProduct/ui/NumberInput";
import GallaryImage from "@/elements/GallaryImage";
import ButtonAction from "@/elements/ButtonAction";
import CartContext from "@/context/CartContext";
import { addToCartSVG } from "@/elements/IconSvg/AddToCart";

function OrderSummary({
  product,
  handleInputOrderSummary,
  quantity,
  setQuantity,
  calculatePrice,
  setShowModal,
}: any) {
  const { AddToCart }: any = useContext(CartContext);

  // convert url to array ["http://...","http://...",...]
  const images_url: string[] = product.img_url.split(",");
  //first image
  const firstImg = images_url[0]

  const handleAddToCart = () => {
    const {id, name, price,old_price,half_kg} = product
    
    AddToCart({ id,img_url:firstImg, name, price,old_price,half_kg })
  };
  return (
    <div className="flex flex-col-reverse sm:flex-row w-full shadow-lg  ">
      <div className="basis-1/2   p-6   bg-background divide-y-2">
        <h2 className="uppercase text-lg text-center">{product?.name}</h2>
        <div className="  my-4 w-full">
          <div className="flex flex-col   gap-3 w-full">
            <div className="flex flex-col items-center justify-between">
              <div className="flex justify-end items-center w-full gap-2 py-4">
              <span className="text-2xl text-green-700">
                  {product?.price.toFixed(2)} DH
                </span>
                <span className="line-through text-red-700">
                  {product?.old_price.toFixed(2)} DH
                </span>
              </div>
              <div className="flex justify-between w-full ">
                <span>Wieght:</span>
                <div className="flex gap-4">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-1">
                    <input
                      type="radio"
                      id="one_kg"
                      name="weight"
                      value={"1 kg"}
                      defaultChecked
                      onChange={handleInputOrderSummary}
                      className="text-secondary bg-gray-100"
                    />
                    <label
                      htmlFor="one_kg"
                      className="sm:text-[13px] text-[12px]"
                    >
                      1 Kg = {product?.price.toFixed(2)} DH
                    </label>
                  </div>
                  <div className="flex flex-col  sm:flex-row justify-between items-center gap-1">
                    <input
                      type="radio"
                      id="half_kg"
                      name="weight"
                      value={"1/2 kg"}
                      onChange={handleInputOrderSummary}
                      className="text-secondary bg-gray-100"
                    />
                    <label
                      htmlFor="half_kg"
                      className="sm:text-[13px] text-[12px]"
                    >
                      1/2 Kg = {product?.half_kg.toFixed(2)} DH
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/*  Quantity section */}
            <div className="flex items-center justify-between py-4">
              {/* <span className="font-bold">Quantity</span> */}
              <div className="flex justify-between items-center gap-7 w-full ">
                <span>Quantity:</span>
                <NumberInput setQuantity={setQuantity} quantity={quantity} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-4">
          <span className="font-bold">Subtotal:</span>
          <span className="font-bold">{calculatePrice()}</span>
        </div>
        <div className="flex justify-between items-center ">
          <span>Delivery Charge:</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between items-center py-4">
          <span className="font-bold">Order Total:</span>
          <span className="text-[22px] font-bold">{calculatePrice()}</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full mt-8">
          <ButtonAction
            label="Order Now"
            onClick={setShowModal}
            className="!w-full"
          />
          <span>or</span>
          <ButtonAction
            childrenn={<div  className="w-5 ">{addToCartSVG}</div>}
            onClick={handleAddToCart}
            className="!w-full flex justify-center !bg-secondary5 hover:!bg-secondary  " 
            title="Add To Cart"            
          />
        </div>
      </div>
      
      {/* Gallary Image */}
      <div className=" basis-1/2 w-full h-full  py-3  text-sm text-left    bg-background">
        <GallaryImage images={images_url} />
      </div>
    </div>
  );
}

export default OrderSummary;
