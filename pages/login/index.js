import Layout from '../../modules/auth/layout';
import Page from '../../modules/auth/page';

export default function Login(props) {
  return <Page {...props} />;
}

Login.getLayout = function getLayout(content, props) {
  return <Layout {...props}>{content}</Layout>;
};

export async function getStaticProps() {
  return {
    props: {
      seo: {
        canonical: `${process.env.SITE_BASE_URL}/login/`,
        title: '',
        metaDesc: '',
      },
    },
  };
}
