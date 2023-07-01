import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
import HeadingStyle from "../../../../components/common/heading-style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { compareProduct } from '../../../../redux/productSlice'
import { useDispatch, useSelector } from "react-redux";
export default function FeaturedProperties({ getFeaturedProduct }) {
  let dispatch = useDispatch();
  const router = useRouter();
  const { compareProducts } = useSelector((state) => state.productData)
  console.log(compareProducts,'compareProducts')
  var settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          getFeaturedProduct,
        },
      },
    ],
  };
  const addProduct = (product) => {
    dispatch(compareProduct(product));
  }
  return (
    <div className=" sm:px-0 py-[100px] bg-[#0E2E50] sm:mt-32 px-2 ">
      <div className=" text-center mb-15 ">
        {" "}
        <HeadingStyle
          styleHeading={""}
          subTitle={"OUR PROPERTIES"}
          title={"Our Featured Properties"}
          colorTitle={"#fff"}
          opacity={20}
        />
      </div>
      <Slider {...settings} className=" overflow-hidden mt-7">
        {getFeaturedProduct?.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg max-w-[410px] bg-white"
            >
              <div className=" relative h-60 bg-[url('https://www.radiustheme.com/demo/wordpress/themes/homlisti/wp-content/uploads/classified-listing/2022/05/9-400x240.jpg')]">
                <div className="absolute z-10 transition-[0.4s] left-[15px] top-7">
                  <span className=" text-white bg-[#00c194] text-[13px] font-normal leading-[1.15] px-2.5 py-[5px] rounded-[3px]">
                    {item.buy}
                  </span>
                </div>
                <div className="absolute z-10 left-[15px] bottom-[29px]">
                  <span className=" text-white  text-[28px] font-normal leading-[1.15] px-2.5 py-[5px] rounded-[3px]">
                    <b>$ {item.price}</b> <sub>/total</sub>
                  </span>
                </div>
                <div className="absolute z-10 transition-[0.4s] right-[15px] top-7">
                  <span className=" text-white bg-[#00c0ff] text-[13px] font-normal leading-[1.15] px-2.5 py-[5px] rounded-[3px]">
                    {"parking " + item.Parking}
                  </span>
                </div>
              </div>
              <div className="-mt-5 pt-0 px-[22px]">
                <Link
                  className="relative bg-white text-sm z-10 leading-none text-[#00c194] font-normal mt-0 px-3 py-2 rounded-[3px];"
                  href={`/products/${item._id}`}
                >
                  {item.apartments}
                </Link>
              </div>
              <div className="my-3  px-[22px]">
                <Link className="text-[#00c194]"    href={`/products/${item._id}`}>
                  {"Studio Home"}
                </Link>
                <div className=' flex items-center justify-between'>
                <h3 className="text-[22px] leading-8 pt-[5px] font-semibold">
                  <Link   href={`/products/${item._id}`}>{item.title}</Link>
                </h3>
                <button
                        className="bg-[#00c194] text-sm font-medium relative z-[1] overflow-hidden mx-[5px] my-3 px-[22px] py-2 rounded-[3px] border-[none] text-white"
                        onClick={()=> addProduct(item)}
                      >
                        Comapre{" "}
                      </button>
                      </div>
                <ul className="text-sm text-[#929292] py-3">
                  <li className="flex items-center">
                    <span className=" mr-2">
                      <Image
                        src="/images/loction.png"
                        width={10}
                        height={14}
                        alt="about"
                      ></Image>
                    </span>
                    {item.location}
                  </li>
                </ul>
                <div className="text-[#929292] text-14">
                  <ul className="flex justify-between">
                    {" "}
                    <li className=" flex items-center">
                      <span className="mr-2">
                        <Image width={32} height={32} src={"/images/bed.png"} alt="about"/>
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
                        <Image width={32} height={32} src={"/images/bed.png"} alt="about"/>
                      </span>
                      <span className="">
                        <span className="">Baths </span>

                        <span className="">{item.washroom}</span>
                      </span>
                    </li>
                    <li className=" flex items-center">
                      <span className="mr-2">
                        <Image width={32} height={32} src={"/images/bed.png"} alt="about"/>
                      </span>
                      <span className="">
                        <span className=""> {item.sqmeters} </span>

                        <span className="">
                          <span>Sqft</span>
                        </span>
                      </span>
                    </li>
                  </ul>{" "}
                </div>
                <div className="px-0 mt-6 pt-3 py-[5px] border-t-[#e1e1e1] border-t border-solidt">
                  <ul className="flex items-center justify-between">
                    <li className="">
                      <div className="flex items-center">
                        <div className="min-w-[36px] mr-3">
                          <Image
                            width={40}
                            height={40}
                            alt="about"
                            src="/images/robert_blue-150x150.jpg"
                            className="max-w-[154px] w-9 h-9 p-0 rounded-[50%]"
                          />{" "}
                        </div>
                        <div className="text-[#70778b] text-[15px] capitalize font-normal leading-[1.2]">
                          <div className="item-title">
                            <span>By</span>
                            <Link
                              className=""
                              href={`/products/${item._id}`}
                            >
                              Robert Blue{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="action-btn">
                  
                    </li>
                    <li className="action-btn">
                      <Link
                        className="bg-[#00c194] text-sm font-medium relative z-[1] overflow-hidden mx-[5px] my-3 px-[22px] py-2 rounded-[3px] border-[none] text-white"
                       href={`/products/${item._id}`}
                      >
                        Details{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
