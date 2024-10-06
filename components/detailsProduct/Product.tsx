import OrderProductSection from "@compo/detailsProduct/OrderProductSection";
import AboutProduct from "@compo/detailsProduct/AboutProduct";
import MoreProducts from "@compo/detailsProduct/MoreProducts";

export default function Product() {
  return (
    <section className="  ">
      <div
        className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span className="font-medium">free delivery, payment upon receipt, order now.</span> 
      </div>

      {/* order form */}
      <div className=" my-4">
        <OrderProductSection />
      </div>
      <AboutProduct />
      <MoreProducts />
    </section>
  );
}
