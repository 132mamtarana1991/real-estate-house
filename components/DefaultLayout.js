/**
 * This "DefaultLayout" is the parent/wrapper component for all layout files.  It is
 * responsible for functionality only.  Do not add UI elements here.
 */

import propTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';

/**
 * TODO: Add support for structured data to seo prop
 */
export default function DefaultLayout({ children, seo }) {
  const {
    canonical,
    metaDesc,
    metaRobotsIndex = 'noindex',
    metaRobotsFollow = 'nofollow',
    title,
  } = seo;

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={metaDesc} />
        <meta
          name="robots"
          content={`${metaRobotsIndex}, ${metaRobotsFollow}`}
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex,nofollow" />

        <link rel="canonical" href={canonical} />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//s.w.org" />
      </Head>

      {/* Prioritized scripts to load in head */}
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-TVQ6RM9"
        strategy="beforeInteractive"
      />

      {/* Scripts to load in document */}
      <Script src="https://www.google-analytics.com/plugins/ua/ec.js" />
      <Script src="https://www.google-analytics.com/plugins/ua/ecommerce.js" />
      <Script src="https://cdn.hadronid.net/hadron.js?url=https%3A%2F%2Fmy.earthlink.net%2F&amp;ref=&amp;_it=amazon&amp;partner_id=486" />
      <Script src="https://scatec.io/t/app.js?id=bbc99514-c806-480b-9a43-092cda4f9053&amp;mode=gtm-template" />
      <Script src="//c.amazon-adsystem.com/aax2/apstag.js" />
      <Script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
      <Script src="https://securepubads.g.doubleclick.net/gpt/pubads_impl_2022120801.js" />
      <Script src="//ats.rlcdn.com/ats.js" />
      <Script src="//secure.cdn.fastclick.net/js/pubcid/latest/pubcid.min.js" />
      <Script src="https://lpcdn.lpsnmedia.net/le_unified_window/10.23.0.0-release_5549/ui-framework.js?version=10.23.0.0-release_5549" />
      <Script src="https://lpcdn.lpsnmedia.net/le_unified_window/10.23.0.0-release_5549/UMSClientAPI.min.js?version=10.23.0.0-release_5549" />
      <Script src="https://lpcdn.lpsnmedia.net/le_unified_window/10.23.0.0-release_5549/lpChatV3.min.js?version=10.23.0.0-release_5549" />
      <Script src="https://lpcdn.lpsnmedia.net/le_unified_window/10.23.0.0-release_5549/surveylogicinstance.min.js?version=10.23.0.0-release_5549" />
      <Script src="https://lpcdn.lpsnmedia.net/le_re/3.53.1.0-release_5134/jsv2/overlay.js?_v=3.53.1.0-release_5134" />
      <Script src="https://lpcdn.lpsnmedia.net/le_re/3.53.1.0-release_5134/jsv2/UISuite.js?_v=3.53.1.0-release_5134" />

      {children}
    </>
  );
}

DefaultLayout.propTypes = {
  children: propTypes.node.isRequired,
  seo: propTypes.shape({
    canonical: propTypes.string.isRequired,
    metaDesc: propTypes.string.isRequired,
    metaRobotsIndex: propTypes.string,
    metaRobotsFollow: propTypes.string,
    title: propTypes.string.isRequired,
  }),
};
