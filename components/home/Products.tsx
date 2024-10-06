import LoandingProductCard from "@/components/detailsProduct/ui/LoandingProductCard";
import { Toaster } from "sonner";

import ProductCard from "@/elements/ProductCard";

import { IProduct } from "@/typings/interfaces";

export default function Products({ products }: { products: IProduct[] | undefined }) {
  return (
    <section className=" py-20 bg-background " id="products">
      <div className="container">
        <h1 className="text-secondary2 text-4xl  text-center font-bold pt-4">
          Our Products
        </h1>
        <h2 className="text-center  text-secondary4 pb-4  capitalize font-bold ">
          Super Sweet Nectarous Honey
        </h2>
        {products && (
          <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-1 py-8 px-4  ">
            {products.map((product: IProduct) => {
              // convert img_url to array
              const arr = product?.img_url.split(","); // convert images to array
              const slug = product.name.replaceAll(" ", "_"); //  replace space with _ for url
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  img={arr[0]}
                  title={product.name}
                  price={product.price}
                  old_price={product.old_price}
                  half_kg={product.half_kg}
                  card_href={`/products/${slug}/${product.id}`}
                />
              );
            })}
          </div>
        )}

        {!products && <LoandingProductCard />}
        <div className=" absolute">
          <Toaster position="top-center" richColors closeButton={true} />
        </div>
      </div>
    </section>
  );
}
