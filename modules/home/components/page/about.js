import React from "react";
import HeadingStyle from "../../../../components/common/heading-style";
import Image from "next/image";
export default function About() {
  return (
    <div className=" sm:mt-11 relative px-3 sm:px-0">
      <img
        src="/images/layer-2-h4.png"
        className=" hidden sm:block animate-bounce  duration-100  absolute z-[-1] right-0 -top-40 brightness-[100%] contrast-[100%] saturate-[100%] blur-none hue-rotate-[288deg]"
      />
      <div className="max-w-maincontainer mx-auto relative">
      <img src="/images/layer-1-h4.png" className=" animate-bounce  duration-100  absolute z-[-1] left-[-138px] -top-10 brightness-[100%] contrast-[100%] saturate-[100%] blur-none hue-rotate-[288deg]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div className="">
            <HeadingStyle
              styleHeading={"About Us"}
              subTitle={"WHO WE ARE"}
              title={
                "We Provide You The Best Service Of Real Estate Industries"
              }
            />
            <p className="text-base text-[#70778a] leading-normal mt-2">
              Building when an unknown printer took a galley of type and scram
              bled it to make a type specimen book. It has survived not only
              five centuries, but also the leape.
            </p>
            <p className="text-base text-[#70778a] leading-normal mt-6">
              when an unknown printer took a galley of type andetry scram bled
              it to make a type specimen bookhas survived not only
              centuriesalwith the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently.
            </p>
            <button
              type="button"
              className="text-[#fff] mt-12 px-8 py-4
            bg-[#00c194]
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 
            shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-sm text-sm  text-center mr-2 mb-2"
            >
              Contact With Us
            </button>
          </div>
          <div className="...">
            <Image src="/images/home-4-sec-1.jpg" width={740} height={540} />
          </div>
        </div>
      </div>
    </div>
  );
}
