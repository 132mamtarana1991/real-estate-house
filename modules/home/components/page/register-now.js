import React from "react";
import HeadingStyle from "../../../../components/common/heading-style";
export default function RegisterNow() {
  return (
    <div className=" bg-[#eaf7f4] relative mt-15">
      <div class="absolute w-[302px] left-0 bottom-0">
        {" "}
        <img
          className="opacity-20 brightness-[80%] contrast-[102%] saturate-[100%] blur-none hue-rotate-[360deg];"
          src="./images/video-bg-2.svg"
        />
      </div>
      <div class="grid grid-cols-3 gap-4 max-w-[1020px] mx-auto">
        <div class="...">
          <img src="./images/cta-man.png" />
        </div>
        <div class="col-span-2 mt-8">
          <HeadingStyle
            styleHeading={"Choose"}
            subTitle={"WHY CHOOSE OUR PROPERTIES"}
            title={"Become a Real Estate Agent"}
          />
          <p className="text-base text-[#70778a] leading-normal my-4">
            Agent hen an unknown printer took a galley of type and scramble d it
            to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic.
          </p>
          <button
            type="button"
            class="text-[#fff] mt-1 px-8 py-4 bg-[#00c194] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-sm text-sm  text-center mr-2 mb-2"
          >
            Contact With Us
          </button>
        </div>
      </div>
      <div class=" absolute w-[302px] right-0 bottom-0">
        {" "}
        <img
          className="opacity-20 brightness-[80%] contrast-[102%] saturate-[100%] blur-none hue-rotate-[360deg];"
          src="./images/video-bg-2.svg"
        />
      </div>
    </div>
  );
}
