import Layout from '../modules/home/layout';
import Page from '../modules/home/page';
import {request} from '../api/fetch-api'
export default function Home(props) {
  return <Page {...props} />;
}

Home.getLayout = function getLayout(content, props) {
  return <Layout {...props}>{content}</Layout>;
};

export async function getStaticProps() {
  const getAllProduct = await request(`/property/getAll`, 'GET')
  const getFeaturedProduct = await request(`/property/find/featured`, 'GET')
  return {
    props: {
      getAllProduct,
      getFeaturedProduct,
      seo: {
        canonical: 'http://localhost:3000/',
        title: 'Home - Welcome to real estate',
        metaDesc:
          'Welcome to myEarthLink. Discover content from around the world. Get updated on the latest news and entertainment from EarthLink!',
      },
    },
  };
}
