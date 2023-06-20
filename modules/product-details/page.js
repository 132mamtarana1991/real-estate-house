import React from "react";
import ProductSideBar from "./product-side-bar";

export default function Page({ getSingleProduct }) {
  return (
    <div className="bg-[#eaf7f4] px-0 py-[60px]">
      <div className=" max-w-maincontainer mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <ProductSideBar getSingleProduct={getSingleProduct}/>
          <div className="">sdds</div>
        </div>
      </div>
    </div>
  );
}
