import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { VscMenu } from "react-icons/vsc";
export default function Heder(){
  const { compareProducts } = useSelector((state) => state.productData)
  console.log(compareProducts,'compareProducts')
  const [nav, setNav] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 745) {
      setNav(nav);
    } else {
      setNav(!nav);
    }
  }, []);
  return (
    <>
    <>
      {" "}
      <div>
        <div
          className={`bg-white px-[1rem] relative shadow-custom z-10 `}
        >
          <div className="max-w-[90%] md:container hidden mx-auto sm:py-2 md:flex justify-between">
            <Image
              alt="site logo"
              src="/images/header/logo.svg"
              width={132}
              height={36}
              className="lg:w-[132px] w-[100px]"
            />
            <div className="flex md:justify-center justify-start bg-[#fff] text-center ">
              <ul
                className={`${
                  nav ? "block" : "hidden"
                }   lg:gap-11 gap-5  bg-transparent  flex-col inline-flex md:justify-center justify-start items-center md:flex-row w-full`}
              >
                <li className="text-[#646464]">
                  <Link href="/"> Home</Link>
                </li>
                <li className="text-[#646464] ">
                  <Link href="/"> Features</Link>
                </li>
                <li className="text-[#646464] ">
                  <Link href="/"> About</Link>
                </li>
              
                <li className="text-[#646464] ">
                  <Link href="/compare"> compare  {compareProducts.length > 0 && compareProducts?.length}</Link>
                </li>
                <li className="text-[#646464] ">
                  <button 
                  // onClick={() => dispatch(logIn(true))}
                  > 
                  Login</button>
                </li>
                <li className="md:flex hidden justify-center text-center">
                  <button
                    className="lg:py-15 bg-[#00c194] lg:px-[1.38rem] px-3 py-2.5 lg:w-[141px] w-[100px] rounded-md flex justify-center items-center text-white"
                    // onClick={() => dispatch(signUp(true))}
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setNav(!nav)}
              className=" md:hidden p-[7px] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-[50%] font-semibold text-[1.7rem] border-2 border-[#00c194]"
            >
              {nav ? (
                <RxCross2 className="flex" />
              ) : (
                <VscMenu className="flex" />
              )}
            </button>
          </div>
          <div className="max-w-[90%] md:container flex mx-auto py-2 md:hidden justify-between">
            <Image
              alt="site logo"
              src="/images/header/logo.svg"
              width={132}
              height={36}
              className="lg:w-[132px] w-[100px]"
            />

            <button
              onClick={() => setNav(!nav)}
              className=" md:hidden p-[7px] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-[50%] font-semibold text-[1.7rem] border-2 border-[#00c194]"
            >
              {nav ? (
                <VscMenu className="flex" />
              ) : (
                <RxCross2 className="flex" />
              )}
            </button>
          </div>
          <div className="max-w-[90%] md:container flex mx-auto pb-2  md:hidden justify-between">
            <div className="flex   bg-[#fff]  ">
              <ul
                className={`${
                  nav ? "hidden" : "block"
                }   lg:gap-11 gap-5  bg-transparent  flex-col inline-flex md:justify-center justify-start items-start pl-1.5 md:flex-row w-full`}
              >
                <li className="text-[#646464]">
                  <Link href="/"> Home</Link>
                </li>
                <li className="text-[#646464] ">
                  <Link href="/"> Features</Link>
                </li>
                <li className="text-[#646464] ">
                  <Link href="/"> About</Link>
                </li>
                <li className="text-[#646464] ">
                  <Link href="/compare"> compare + {compareProducts.length > 0 ? compareProducts.length : 'r'}</Link>
                </li>
                <li className="text-[#646464] ">
                  <Link href="/"> Login</Link>
                </li>
                <li className="flex justify-center text-center">
                  <button className="lg:py-15 md:hidden bg-[#00c194] lg:px-[1.38rem] px-2 py-1 rounded-md flex justify-center items-center text-center text-white">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute justify-center flex left-0 right-0`}
      >
      </div>
      <div className="absolute pt-[108px]  justify-center flex left-0 right-0">
     
      </div>
    </>
    </>
  );
};


