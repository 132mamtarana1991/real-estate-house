import Layout from '../../modules/home/layout';
import Page from '../../modules/product-details/page';
import {request} from '../../api/fetch-api'
export default function Home(props) {
  return <Page {...props} />;
}

Home.getLayout = function getLayout(content, props) {
  return <Layout {...props}>{content}</Layout>;
};
export const getStaticPaths = async () => {
  const getAllProduct = await request(`/property/getAll`, 'GET')

  const paths = getAllProduct?.map((item) => {
    return {
      params: { product: item._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const id = context.params.product;
  const getSingleProduct = await request(`/property/find/${id}`, 'GET')
  return {
    props: {
      getSingleProduct,
      seo: {
        canonical: 'http://localhost:3000/',
        title: 'Home - Welcome to real estate',
        metaDesc:
          'Welcome to myEarthLink. Discover content from around the world. Get updated on the latest news and entertainment from EarthLink!',
      },
    },
  };
}
