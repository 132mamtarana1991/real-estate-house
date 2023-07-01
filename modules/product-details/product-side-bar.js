import React from 'react'
import Image from "next/image";
export default function ProductSideBar({getSingleProduct}) {
  return (
    <div className="col-span-2 ">
    <div className="flex items-center mb-2;">
      <span className="text-sm font-medium capitalize text-white inline-block leading-[1.4] bg-[#00c194] mr-1 pt-1.5 pb-1 px-3 rounded-sm">
        For Buy{" "}
      </span>
      <div className="leading-[100%] mx-0 my-2">
        <span className="text-sm font-medium capitalize text-white inline-block leading-[1.4] bg-[#00c0ff] mr-1 pt-1.5 pb-1 px-3 rounded-sm">
          Popular
        </span>
      </div>
    </div>
    <h1 className="text-[28px] text-[#212121] font-semibold mb-[3px]">
     {getSingleProduct?.title}
    </h1>
    <ul className=" mb-1.5 m-0 p-0">
      <li className="inline-block text-[15px] relative text-[#878c9f]">
        <i className="fas fa-map-marker-alt  text-[#878c9f] text-base mr-2"></i>
        Jackson, Brentwood Drive
        <span className="rtcl-delimiter">,</span> New Jersey{" "}
      </li>
      <li className="inline-block text-[15px] relative text-[#878c9f]">
        <i className="far fa-clock  text-[#878c9f] text-base mr-2"></i>1
        year ago
      </li>
      <li className="inline-block text-[15px] relative text-[#878c9f]">
        <i className="far fa-eye  text-[#878c9f] text-base mr-2"></i>Views:{" "}
        <span>1,653</span>{" "}
      </li>
    </ul>
    <div className="">
      <img
        src="https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/03/robert_blue1-1.jpg"
        className="rounded"
      />
    </div>
    <div className="rounded bg-white border pt-[25px] pb-[30px] px-[30px] border-solid border-[#e7e7e7] mt-6">
      <h2 className="text-xl text-[#212121] mb-2">Overview</h2>
      <div className="">
        <ul className="flex flex-wrap">
          <li className="relative w-3/12 mt-2.5 mb-[27px]">
          <div className="float-left mr-[15px] text-xl w-[50px] h-[50px] border rounded bg-white shadow-[0_4px_18px_0_rgba(188,192,202,0.26)] flex items-center justify-center text-[#00c194] transition-[0.3s] m-0 border-solid border-[rgb(232,233,241)]">
              <Image
                width={21}
                height={21}
                alt="about"
                src={"/images/icon1.png"}
              />
            </div>
            <div className="amenities-content">
              <h2 className="text-sm text-[#212121] leading-[1.4] font-medium mt-0.5 m-0">
                ID No{" "}
              </h2>
              <span className="text-[#878c9f] text-sm leading-loose flex flex-wrap items-center text-left justify-start;">
                17438
              </span>
            </div>
          </li>
          <li className="relative w-3/12 mt-2.5 mb-[27px]">
            <div className="float-left mr-[15px] text-xl w-[50px] h-[50px] border rounded bg-white shadow-[0_4px_18px_0_rgba(188,192,202,0.26)] flex items-center justify-center text-[#00c194] transition-[0.3s] m-0 border-solid border-[rgb(232,233,241)]">
              <Image
                width={21}
                height={21}
                alt="about"
                src={"/images/icon1.png"}
              />
            </div>
            <div className="amenities-content">
              <h2 className="text-sm text-[#212121] leading-[1.4] font-medium mt-0.5 m-0">
                Type{" "}
              </h2>
              <span className="text-[#878c9f] text-sm leading-loose flex flex-wrap items-center text-left justify-start;">
                {getSingleProduct?.type}
              </span>
            </div>
          </li>
          <li className="relative w-3/12 mt-2.5 mb-[27px]">
          <div className="float-left mr-[15px] text-xl w-[50px] h-[50px] border rounded bg-white shadow-[0_4px_18px_0_rgba(188,192,202,0.26)] flex items-center justify-center text-[#00c194] transition-[0.3s] m-0 border-solid border-[rgb(232,233,241)]">
              <Image
                width={21}
                alt="about"
                height={21}
                src={"/images/icon1.png"}
              />
            </div>
            <div className="amenities-content">
              <h2 className="text-sm text-[#212121] leading-[1.4] font-medium mt-0.5 m-0">
              Parking
              </h2>
              <span className="text-[#878c9f] text-sm leading-loose flex flex-wrap items-center text-left justify-start;">
              {getSingleProduct?.Parking}
              </span>
            </div>
          </li>
          <li className="relative w-3/12 mt-2.5 mb-[27px]">
          <div className="float-left mr-[15px] text-xl w-[50px] h-[50px] border rounded bg-white shadow-[0_4px_18px_0_rgba(188,192,202,0.26)] flex items-center justify-center text-[#00c194] transition-[0.3s] m-0 border-solid border-[rgb(232,233,241)]">
              <Image
                width={21}
                height={21}
                alt="about"
                src={"/images/icon1.png"}
              />
            </div>
            <div className="amenities-content">
              <h2 className="text-sm text-[#212121] leading-[1.4] font-medium mt-0.5 m-0">
              Bedroom{" "}
              </h2>
              <span className="text-[#878c9f] text-sm leading-loose flex flex-wrap items-center text-left justify-start;">
              {getSingleProduct?.beds}
              </span>
            </div>
          </li>
          <li className="relative w-3/12 mt-2.5 mb-[27px]">
          <div className="float-left mr-[15px] text-xl w-[50px] h-[50px] border rounded bg-white shadow-[0_4px_18px_0_rgba(188,192,202,0.26)] flex items-center justify-center text-[#00c194] transition-[0.3s] m-0 border-solid border-[rgb(232,233,241)]">
              <Image
                width={21}
                height={21}
                alt="about"
                src={"/images/icon1.png"}
              />
            </div>
            <div className="amenities-content">
              <h2 className="text-sm text-[#212121] leading-[1.4] font-medium mt-0.5 m-0">
              Bath
              </h2>
              <span className="text-[#878c9f] text-sm leading-loose flex flex-wrap items-center text-left justify-start;">
                {getSingleProduct?.washroom}
              </span>
            </div>
          </li>
          <li className="relative w-3/12 mt-2.5 mb-[27px]">
          <div className="float-left mr-[15px] text-xl w-[50px] h-[50px] border rounded bg-white shadow-[0_4px_18px_0_rgba(188,192,202,0.26)] flex items-center justify-center text-[#00c194] transition-[0.3s] m-0 border-solid border-[rgb(232,233,241)]">
              <Image
                width={21}
                height={21}
                src={"/images/icon1.png"}
                alt="about"
              />
            </div>
            <div className="amenities-content">
              <h2 className="text-sm text-[#212121] leading-[1.4] font-medium mt-0.5 m-0">
              Sqft
              </h2>
              <span className="text-[#878c9f] text-sm leading-loose flex flex-wrap items-center text-left justify-start;">
              {getSingleProduct?.sqmeters}
              </span>
            </div>
          </li>
          <li className="relative w-3/12 mt-2.5 mb-[27px]">
          <div className="float-left mr-[15px] text-xl w-[50px] h-[50px] border rounded bg-white shadow-[0_4px_18px_0_rgba(188,192,202,0.26)] flex items-center justify-center text-[#00c194] transition-[0.3s] m-0 border-solid border-[rgb(232,233,241)]">
              <Image
                width={21}
                height={21}
                src={"/images/icon1.png"}
                alt="about"
              />
            </div>
            <div className="amenities-content">
              <h2 className="text-sm text-[#212121] leading-[1.4] font-medium mt-0.5 m-0">
              Purpose
              </h2>
              <span className="text-[#878c9f] text-sm leading-loose flex flex-wrap items-center text-left justify-start;">
              For Sell
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="rounded bg-white border pt-[25px] pb-[30px] px-[30px] border-solid border-[#e7e7e7]">
      <h2 className="text-xl text-[#212121] mb-5">About This Listing</h2>
      <p className="text-base leading-[30px] text-[#788593] font-normal">
        Brand New Shopping Mall is not currently for buy or for rent on
        Trulia. The description and property data below may have been
        provided by the Homlisti real estate company, the homeowner, or
        public records.
      </p>
      <p className="text-base leading-[30px] text-[#788593] font-normal mt-4">
        The Sopping Mall is located at 1250Jackson, Brentwood Drive HD
        #1, New Jersey, Sierra Vista Dr #1 is in the Paradise
        neighborhood in New Jersey, ND, and in ZIP code 75485. This
        shopping mall has approximately 1800 sqft of floor space with 15
        racks of necessary property and a cash desk an extra 2 bedrooms
        and 2 bathrooms. This property was built in 2020.
      </p>
    </div>
    <div className="rounded bg-white border pt-[25px] pb-[30px] px-[30px] border-solid border-[#e7e7e7]">
      <h2 className="text-xl text-[#212121] mb-5">Features & Amenities</h2>
      <ul className="flex flex-col rounded mb-0 pl-0">
        <li className="leading-[23px] flex mt-px  py-[9px] border-[none]">
          <span className="w-full grid grid-cols-[1fr_1fr_1fr] gap-2">
            {getSingleProduct?.facility.map((item)=>{
              return(
                <span className="text-[#212121] font-medium min-w-[140px]  mr-2.5 flex items-center  pb-2">
                <Image
                  width={18}
                  height={18}
                  src={"/images/right.png"}
                  className="text-[#00c194] mr-1"
                  alt="about"
                />
                <span className="text-[#6c757d] text-sm font-normal">
                {item}
                </span>
              </span>
              )
            })}
         

          </span>
        </li>
      </ul>
    </div>
    <div className="rounded bg-white border pt-[25px] pb-[30px] px-[30px] border-solid border-[#e7e7e7]">
      <h2 className="text-xl text-[#212121] mb-5">Map Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
        width="100%"
        height="600"
        frameborder="0"
      ></iframe>
    </div>
  </div>
  )
}
