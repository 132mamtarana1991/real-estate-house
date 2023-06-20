import About from "./components/page/about";
import Banner from "./components/page/banner";
import DreamHome from "./components/page/dream-home";
import EstateServicesHelpline from "./components/page/estate-services-helpline";
import ExclusiveAgetns from "./components/page/exclusive-agetns";
import FeaturedProperties from "./components/page/featured-properties";
import LatestProduct from "./components/page/latest-product";
import LogoSlider from "./components/page/logo-slider";
import NeighBorHood from "./components/page/neigh-bor-hood";
import Offering from "./components/page/offering";
import PropertyType from "./components/page/property-type";
import SearchProperty from "./components/page/search-property";
import Testimonial from "./components/page/testimonial";

export default function Page({getAllProduct, getFeaturedProduct}) {
  console.log(getAllProduct,'getAllProduct')
  return (
    <main className="font-Ubuntu">
      <Banner />
      <LogoSlider />
      <About />
      <FeaturedProperties getFeaturedProduct={getFeaturedProduct}/>
      <LatestProduct getAllProduct={getAllProduct}/>
       <Offering />
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
