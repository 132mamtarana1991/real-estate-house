import React from "react";

import Link from "next/link";

import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#ebebeb] sm:pt-[5rem]">
      <div className="max-w-[90%] md:container mx-auto flex-col lg:flex-row py-10 flex">
        <div className="md:pr-[11rem] text-center md:text-left md:basis-2/4">
          <h4 className="text-[#1D1D1D] font-semibold text-[2.1rem] leading-10 mb-2">
            Bizzio
          </h4>
          <p className="text-[#1D1D1D] mb-[2rem] md:mb-10 leading-7">
            Professional housecleaning services, you want to make sure that you
            find a team that can accommodate your schedule, and cleaning
            preferences.
          </p>
          <div className="hidden md:flex">
            <Link href="/" className="text-[2rem] mx-4">
              <FaFacebook className="text-[#1D1D1D]" />
              {/* <Image alt="" src="" width={30} height={30} /> */}
            </Link>
            <Link href="/" className="text-[2rem] mx-4">
              <FaFacebook className="text-[#1D1D1D]" />
              {/* <Image alt="" src="" width={30} height={30} /> */}
            </Link>
            <Link href="/" className="text-[2rem] mx-4">
              <FaFacebook className="text-[#1D1D1D]" />
              {/* <Image alt="" src="" width={30} height={30} /> */}
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-center md:flex-row sm:mt-[3rem] mt-0 gap-y-8 md:gap-x-3 md:basis-2/3 justify-between">
          <div className="text-[#1D1D1D]">
            <h4 className="font-bold text-lg">Links</h4>
            <ul>
              <li className="my-4">
                <Link href="/">Home</Link>
              </li>
              <li className="my-4">
                <Link href="/">Services</Link>
              </li>
              <li className="my-4">
                <Link href="/">About</Link>
              </li>
              <li className="my-4">
                <Link href="/">Pricing</Link>
              </li>
              <li className="my-4">
                <Link href="/">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="text-[#1D1D1D]">
            <h4 className="font-bold text-lg">About</h4>
            <ul>
              <li className="my-4">
                <Link href="/">Partners</Link>
              </li>
              <li className="my-4">
                <Link href="/">Careers</Link>
              </li>
              <li className="my-4">
                <Link href="/">Press</Link>
              </li>
              <li className="my-4">
                <Link href="/">Press</Link>
              </li>
            </ul>
          </div>
          <div className="text-[#1D1D1D]">
            <h4 className="font-bold text-lg">Our Office</h4>
            <div className="">
              <div className="md:mb-10 mb-4 mt-4">
                <h5>Indonesia</h5>
                <p className="leading-9 md:leading-7">
                  Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881
                </p>
              </div>
              <div className="">
                <h5>Tokyo</h5>
                <p className="leading-9 md:leading-7">
                  35 Mandalay Road 13–37 Mandalay Towers Singapore 308215
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-8 md:mt-0 justify-center md:hidden">
          <Link href="/" className="text-[2rem] mx-4">
            <FaFacebook className="text-[#1D1D1D]" />
            {/* <Image alt="" src="" width={30} height={30} /> */}
          </Link>
          <Link href="/" className="text-[2rem] mx-4">
            <FaFacebook className="text-[#1D1D1D]" />
            {/* <Image alt="" src="" width={30} height={30} /> */}
          </Link>
          <Link href="/" className="text-[2rem] mx-4">
            <FaFacebook className="text-[#1D1D1D]" />
            {/* <Image alt="" src="" width={30} height={30} /> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
