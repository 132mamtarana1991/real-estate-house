import Link from "next/link";
import Image from "next/image";
import HeadingStyle from "../../../../components/common/heading-style";

export default function LatestProduct({ getAllProduct }) {
  const getProduct = getAllProduct ? getAllProduct.slice(0, 8) : [];
  return (
    <div className="pt-[100px] pb-[90px] px-0 ">
      <div className=" text-center pb-16">
        <HeadingStyle
          styleHeading={"Properties"}
          subTitle={"LATEST LISTINGS"}
          title={"Featured Property For Sale"}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 md:container mx-auto">
        {getProduct?.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg  bg-white"
            >
              <div className=" flex flex-wrap sm:flex-nowrap">
                <div className="sm:w-2/5">
                  <img src="https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/03/daziy_millar3-1-400x240.jpg" />
                </div>
                <div className="my-3 sm:w-3/4	 px-[22px]">
                  <div className=" flex items-center justify-between">
                    <h3 className="text-[18px] leading-8 pt-[0px] font-semibold">
                      <Link   href={`/products/${item._id}`}>{item.title}</Link>
                    </h3>

                    <Link
                      className="bg-[#00c194] text-sm font-medium overflow-hidden px-[22px] py-2 rounded-[3px] border-[none] text-white"
                      href={`/products/${item._id}`}
                    >
                      Details{" "}
                    </Link>
                  </div>

                  <ul className="text-sm text-[#929292] py-3 flex items-center">
                    <li className="flex items-center">
                      <span className=" mr-2">
                        <Image
                          src="/images/loction.png"
                          width={10}
                          height={14}
                        ></Image>
                      </span>
                      {item.location}
                    </li>
                    <li className=" ml-3">
                      <span class=" text-[#929292] text-sm">
                        <b>$ {item.price}</b> /total
                      </span>
                    </li>
                  </ul>
                  <div className="text-[#929292] text-14">
                    <ul className="flex justify-between">
                      {" "}
                      <li className=" flex items-center">
                        <span className="mr-2">
                          <Image
                            width={32}
                            height={32}
                            src={"/images/bed.png"}
                          />
                        </span>
                        <span>
                          <span>Beds </span>

                          <span>
                            <span> {item.beds}</span>
                          </span>
                        </span>
                      </li>
                      <li className=" flex items-center">
                        <span className="mr-2">
                          <Image
                            width={32}
                            height={32}
                            src={"/images/bed.png"}
                          />
                        </span>
                        <span className="">
                          <span className="">Baths </span>

                          <span className="">{item.washroom}</span>
                        </span>
                      </li>
                      <li className=" flex items-center">
                        <span className="mr-2">
                          <Image
                            width={32}
                            height={32}
                            src={"/images/bed.png"}
                          />
                        </span>
                        <span className="">
                          <span className=""> {item.sqmeters} </span>

                          <span className="">
                            <span>Sqft</span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-[52px]">
        <Link
          className="bg-[#00c194] text-sm font-medium overflow-hidden px-[22px] py-2 rounded-[3px] border-[none] text-white"
          href="/product-details"
        >
          Show All Products
        </Link>
      </div>
    </div>
  );
}
