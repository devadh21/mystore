"use client";
import { useState } from "react";
import ModalAddProduct from "@/components/admi/ui/ModalAddProduct";
import ButtonAddPdt from "@/components/admi/ui/ButtonAddPdt ";

export default function AddNewProduct() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <ButtonAddPdt setShow={setShow} />
      {show && <ModalAddProduct setShow={setShow} />}
    </div>
  );
}
