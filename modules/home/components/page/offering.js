import React from "react";
import Image from "next/image";
import HeadingStyle from "../../../../components/common/heading-style";
export default function Offering() {
  return (
    <div className="md:container mx-auto relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="...">
          {" "}
          <img src="/images/property.png"></img>
        </div>
        <div className=" mt-18">
          <HeadingStyle
            styleHeading={"Choose"}
            subTitle={"WHY CHOOSE OUR PROPERTIES"}
            title={"The experts in local and international property"}
          />
          <p className="text-base text-[#70778a] leading-normal my-4">
            Agent hen an unknown printer took a galley of type and scramble d it
            to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic.
          </p>
          <p className="text-base text-[#70778a] leading-normal my-4">
            Agent hen an unknown printer took a galley of type and scramble d it
            to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic.
          </p>
          <ul className=" mb-12">
            <li className="text-[#212121] text-base leading-normal mb-2.5 flex items-center">
              <Image
                src="/images/right1.png"
                alt="about"
                width="12"
                height="8"
                className=" mr-2"
              ></Image>{" "}
              Outstanding property
            </li>
            <li className="text-[#212121] text-base leading-normal mb-2.5 flex items-center">
              <Image
                src="/images/right1.png"
                alt="about"
                width="12"
                height="8"
                className=" mr-2"
              ></Image>
              Modern City Locations
            </li>
            <li className="text-[#212121] text-base leading-normal mb-2.5 flex items-center">
              <Image
                src="/images/right1.png"
                alt="about"
                width="12"
                height="8"
                className=" mr-2"
              ></Image>
              Specialist services
            </li>
            <li className="text-[#212121] text-base leading-normal mb-2.5 flex items-center">
              <Image
                src="/images/right1.png"
                alt="about"
                width="12"
                height="8"
                className=" mr-2"
              ></Image>
              Market-leading research
            </li>
          </ul>
          <a
            href="#_"
            class="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter
             text-[#00c194] bg-[#dceeea] hover:text-white 
             rounded-md group"
          >
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00c194] text-white rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full"></span>
            <span class="relative">Read More</span>
          </a>
        </div>
      </div>
    </div>
  );
}
