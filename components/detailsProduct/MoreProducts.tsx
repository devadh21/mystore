import React from "react";

import ProductCard from "@/elements/ProductCard";
import { IProduct } from "@/typings/interfaces";
import getProductsActions from "@/serverActions/products/getProductsActions";

async function getProducts() {
  const res = await getProductsActions();
  if (res === undefined) throw new Error("No Products Found");
  return res;
}

export default async function MoreProducts() {
  const res = await getProducts();
  const productList = res as IProduct[];
  const first_tree_products = productList.slice(0, 3);
  //   console.log("dd",productList.slice(0,3))

  return (
    <div className="mt-20 py-4">
      <h1 className="text-secondary2 text-xl  uppercase font-bold p-4">
        you may aslo like
      </h1>
      {first_tree_products && (
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-1  py-8 px-4  ">
          {first_tree_products.map((product: IProduct) => {
            // convert img_url to array
            const arr = product?.img_url.split(",");
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                img={arr[0]}
                title={product.name}
                price={product.price}
                old_price={product.old_price}
                half_kg={product.half_kg}
                card_href={`/products/${product.name}/${product.id}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
