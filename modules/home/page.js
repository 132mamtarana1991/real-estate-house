import About from "./components/page/about";
import Banner from "./components/page/banner";
import FeaturedProperties from "./components/page/featured-properties";
import LatestProduct from "./components/page/latest-product";
import LogoSlider from "./components/page/logo-slider";
import Offering from "./components/page/offering";
import RegisterNow from "./components/page/register-now";

export default function Page({getAllProduct, getFeaturedProduct}) {
  return (
    <main className="font-Ubuntu">
      <Banner />
      <LogoSlider />
      <About />
      <FeaturedProperties getFeaturedProduct={getFeaturedProduct}/>
      <LatestProduct getAllProduct={getAllProduct}/>
       <Offering />
       <RegisterNow/>
     {/* <PropertyType />
      <NeighBorHood />
      <SearchProperty />
      <ExclusiveAgetns />
      <EstateServicesHelpline />
      <Testimonial /> */}
      {/* <DreamHome /> */}
    </main>
  );
}
