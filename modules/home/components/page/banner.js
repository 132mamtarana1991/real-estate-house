"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

export default function Banner() {
  return (
    <section className="bg-[#F5F9F9] px-[1rem] ">
      <div className="max-w-[90%] md:container flex items-center flex-col xl:flex-row mx-auto py-[3rem] md:py-[5rem]">
        <div className="basis-1/2 pr-0 xl:pr-[5rem] text-center sm:text-left mb-[1.5rem] sm:mb-[3rem] xl:mb-0">
          <p className="md:text-[1.1rem] text-[1rem] text-[#1D1D1D] mb-[1.4rem] font-semibold tracking-wide">
            A GROWTH FACILITATING MANAGEMENT PLATFORM
          </p>
          <h1 className="text-[2rem]  sm:text-[3.75rem] leading-snug font-bold text-[#1D1D1D]">
            <span className="text-[#00c194]">Your</span> forward thinking,
            team-playing trades{" "}
            <span className="text-[#00c194]">and services partner</span>
          </h1>
          <p className="text-[#646464] leading-8  mt-[1rem] sm:mt-[2rem]">
            Built by successful business for successful business. Bizzio takes
            care of your business on the ground, supporting your vision for the
            future.
          </p>
          <Link
            href="/"
            className="mt-[2rem] w-full sm:w-auto hidden sm:inline-block"
          >
            <button
              className="bg-[#00c194] w-full text-center justify-center sm:justify-start sm:w-auto px-10 py-5 text-white rounded-lg flex items-center"
              type="button"
            >
              Start Free Trial Now{" "}
              <BsArrowRight className="ml-2 text-[1.3rem]" />
            </button>
          </Link>
        </div>
        <div className="basis-1/2 text-center">
          <Image
            src="/images/home/hero.png"
            alt="hompage banner image"
            width={857}
            height={891}
          />
          <Link
            href="/"
            className="mt-[2rem] w-[80%] sm:w-auto sm:hidden inline-block"
          >
            <button
              className="bg-[#00c194] w-full text-center justify-center sm:justify-start sm:w-auto px-10 py-5 text-white rounded-lg flex items-center"
              type="button"
            >
              Start Free Trial Now{" "}
              <BsArrowRight className="ml-2 text-[1.3rem]" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
