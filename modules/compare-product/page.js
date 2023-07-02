import React from "react";
import { useSelector } from "react-redux";
export default function Page() {
  const { compareProducts } = useSelector((state) => state.productData)
  console.log(compareProducts,'compareProducts')
  return (
    <div className="bg-[#eaf7f4] px-0 py-[60px]">
      <div className=" md:container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 md:container mx-auto">
            <div>s</div>
            {compareProducts?.map((item)=>{
              return(
                <div>
                {item.price}
                </div>
              )
            })}
          </div>
      </div>
    </div>
  );
}
