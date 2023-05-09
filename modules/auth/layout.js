/**
 * This is the layout for my.earthlink.net/login/ (currently /channel/edit/signin)
 *
 * Use for header
 * - header
 * - header navigation
 * - footer navigation
 * - footer
 */

import DefaultLayout from '../../components/DefaultLayout';

export default function Layout({ children, seo }) {
  return <DefaultLayout seo={seo}>{children}</DefaultLayout>;
}
