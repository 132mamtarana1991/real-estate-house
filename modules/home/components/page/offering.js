import React from "react";

export default function Offering() {
  return (
    <div class="container relative md:mt-24 mt-16">
      <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div class="md:col-span-5">
          <div class="relative">
            <div class="p-5 shadow dark:shadow-gray-800 rounded-t-full bg-gray-50 dark:bg-slate-800">
              <img
                src="https://shreethemes.in/techwind/layouts/assets/images/real/about.jpg"
                class="shadow-md rounded-t-full rounded-md"
                alt=""
              />
            </div>
            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
              <a
                href="#!"
                data-type="youtube"
                data-id="yba7hPeTSjk"
                class="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600"
              >
                <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="md:col-span-7">
          <div class="lg:ms-4">
            <h4 class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">
              Efficiency. Transparency. <br /> Control.
            </h4>
            <p class="text-slate-400 max-w-xl">
              Techwind Homes developed a platform for the Real Estate
              marketplace that allows buyers and sellers to easily execute a
              transaction on their own. The platform drives efficiency, cost
              transparency and control into the hands of the consumers. Techwind
              Homes is Real Estate Redefined.
            </p>

            <div class="mt-4">
              <a
                href=""
                class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3"
              >
                Learn More{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
