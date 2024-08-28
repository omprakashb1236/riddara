import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { fetchNavigationItems } from '../lib/sanity';
import Layout from '../components/Layout';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','600' ,'700','800'],
});

function MyApp({ Component, pageProps, navigationItems }) {
  return (
    <div className={montserrat.className}>
    <Layout navigationItems={navigationItems}>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}

MyApp.getInitialProps = async ({ router }) => {
  const locale = router.locale || 'en'; 
  const navigationItems = await fetchNavigationItems(locale);
  return { navigationItems };
};

export default MyApp;
