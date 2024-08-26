// pages/_app.js
import { fetchNavigationItems } from '../lib/sanity';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, navigationItems }) {
  return (
    <Layout navigationItems={navigationItems}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async ({ router }) => {
  const locale = router.locale || 'en'; 
  const navigationItems = await fetchNavigationItems(locale);
  return { navigationItems };
};

export default MyApp;
