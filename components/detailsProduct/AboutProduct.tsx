import React from "react";

export default function AboutProduct() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-20 py-4  justify-center items-center md:divide-x-4">
      <div className=" p-4 h-full   ">
        <h1 className="py-4 text-xl text-secondary uppercase font-bold  ">
          quick description
        </h1>
        <p>
          Honey is a natural sweet substance produced by bees from the nectar of
          flowers. It is primarily composed of sugars, such as glucose and
          fructose, along with water and small amounts of vitamins, minerals,
          enzymes, and antioxidants. With its rich flavor and nutritional
          benefits, honey has been cherished for centuries as a versatile food
          and natural remedy.
        </p>
      </div>
      <div className=" p-4 h-full">
        <h1 className="py-4 text-xl text-secondary uppercase font-bold  ">
          more details
        </h1>
        <p>
          Composition:
          <br />
          - Carbohydrates: Predominantly glucose and fructose.
          <br />
          - Water Content: Typically around 17-20%.
          <br />
          - Nutrients: Includes vitamins (B and C), minerals (calcium, iron,
          potassium, magnesium, zinc), enzymes, antioxidants, amino acids, and
          organic acids.
          <br />- Trace Elements: Pollen, propolis, and bee wax remnants.
        </p>
      </div>
      <div className=" p-4 h-full  ">
        <h1 className="py-4 text-xl text-secondary uppercase font-bold  ">
          features
        </h1>
        <p className="">
          benefits:
          <br />
          - Natural sweetener with added nutrients.
          <br />
          - Rich in antioxidants, protecting against oxidative stress.
          <br />
          - Soothes sore ats and coughs. <br />
          - Supports digestive health. <br />
          - Provides a quick energy boost.
          <br />
          - Used in skincare for hydration and antimicrobial benefits.
          <br />
          - Local honey may alleviate seasonal allergies.
          <br />
          - May improve heart health.
        </p>
      </div>
    </div>
  );
}
