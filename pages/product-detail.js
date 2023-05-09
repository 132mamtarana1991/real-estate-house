import Layout from '../modules/home/layout';
import Page from '../modules/product-details/pages';

export default function Home(props) {
  return <Page {...props} />;
}

Home.getLayout = function getLayout(content, props) {
  return <Layout {...props}>{content}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      seo: {
        canonical: process.env.SITE_BASE_URL,
        title: 'Home - Welcome to real estate',
        metaDesc:
          'Welcome to myEarthLink. Discover content from around the world. Get updated on the latest news and entertainment from EarthLink!',
      },
    },
  };
}
