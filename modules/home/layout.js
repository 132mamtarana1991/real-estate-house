/**
 * This is the layout for my.earthlink.net
 *
 * Use for header
 * - header
 * - header navigation
 * - footer navigation
 * - footer
 */

import DefaultLayout from "../../components/DefaultLayout";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";

export default function Layout({ children, seo }) {
  return (
    <DefaultLayout seo={seo}>
      <Header />
      {children}
      <Footer />
    </DefaultLayout>
  );
}
