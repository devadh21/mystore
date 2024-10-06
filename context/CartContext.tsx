import { createContext, useEffect, useState } from "react";
import { IProduct } from "@/typings/interfaces";

const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<any>([]);
  const nbrItems: number = cartItems.length;

  useEffect(() => {
    setCartState();
  }, []);

  const setCartState = () => {
    setCartItems(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")!)
        : []
    );
  };
  const AddToCart = ({
    id,
    img_url,
    name,
    price,
    old_price,
    half_kg,
    quantity = 1,
    weight = "1 kg",
  }: any) => {
    const total_price =
      weight === "1 kg"
        ? (price * quantity).toFixed(2)
        : (half_kg * quantity).toFixed(2);

    price = (price * 1).toFixed(2);
    old_price = (old_price * 1).toFixed(2);

    // const total_final =  (price * quantity).toFixed(2);
    const product = {
      id,
      img_url,
      name,
      price,
      old_price,
      total_price,
      half_kg,
      quantity,
      weight,
    };
    let newCartPdts: IProduct[];

    // verify if productis already exist in cart.
    const isPdtInCart = cartItems.find((item: any) => item.id === id);
    if (isPdtInCart) {
      newCartPdts = cartItems?.map((item: any) =>
        // i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        item.id === product.id ? product : item
      );
    } else {
      newCartPdts = [...(cartItems || []), product];
    }

    localStorage.setItem("cart", JSON.stringify(newCartPdts));
    setCartState();
  };
  const deleteToCart = ({ idPdt }: any) => {
    const newProducts: any = cartItems.filter((pdt: any) => pdt.id !== idPdt);
    localStorage.setItem("cart", JSON.stringify(newProducts));
    setCartState();
  };



  // calculate the total price of all items in the cart
  const getCartTotal = () => {    
    const total = cartItems.reduce((total: any, pdt: any) => {
      const totalFinal =
        pdt.weight === "1 kg"
          ? total + pdt.price * pdt.quantity
          : total + pdt.half_kg * pdt.quantity;
      return totalFinal;
      // total + pdt.price * pdt.quantity
    }, 0);
    return total.toFixed(2); 
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        AddToCart,
        deleteToCart,
        nbrItems,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
