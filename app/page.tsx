import { revalidatePath } from "next/cache";
import getProductsActions   from "@/serverActions/products/getProductsActions";

import Hero from "@compo/home/Hero";
import Products from "@compo/home/Products"; 
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/Services";
import Newslatter from "@/components/home/Newslatter";
import { IProduct } from "@/typings/interfaces";


async function getProducts() {   
  const res:IProduct[] | undefined = await getProductsActions();

  if (res === undefined) throw new Error("No Products Found"); 
  revalidatePath("/");

  return res; 
}

export default async  function Home() {
  // get products data from the server. 
  const data = await getProducts();    

  return (
    <main className="full-screen">     
      <Hero />
      <Products products={data} />
      <About />
      <WhyUs/>      
      <Services/>      
      <Newslatter/>      
    </main>
  );
}
