import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function LogoSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: false,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          dots: false,
        }
      }
    ]
  };
  const hello = [
    {
      img: "/images/client-logo-1.svg",
    },
    {
      img: "/images/client-logo-2.svg",
    },
    {
      img: "/images/client-logo-3.svg",
    },
    {
      img: "/images/client-logo-4.svg",
    },
    {
      img: "/images/client-logo-5.svg",
    },
    {
      img: "/images/client-logo-6.svg",
    },
  ];
  return (
    <div className="bg-[#FBFBFB] sm:py-[60px] border-b-[#F2F2F2] border-b border-solid sm:mb-32 overflow-hidden">
    <Slider {...settings} className="max-w-maincontainer mx-auto ">
      {hello.map((item, index) => {
        return (
          <div key={index} className="grayscale outline:none transition ease-in-out delay-150  cursor-pointer hover:grayscale-[0%] hover:shadow-[0_1px_0px_0_#00c194]">
            <Image
              src={item.img}
              alt="google"
              width="200"
              height="71"
              className=" mx-auto"
            />
          </div>
        );
      })}
    </Slider>
    </div>
  );
}
