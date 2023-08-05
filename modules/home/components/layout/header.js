import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { VscMenu } from "react-icons/vsc";
export default function Heder() {
  const { compareProducts } = useSelector((state) => state.productData);
  console.log(compareProducts, "compareProducts");
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
<h1 className="navbar">nav</h1>
    </>
  );
}
