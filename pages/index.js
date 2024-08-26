import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/Header';
import { sanityClient } from '../sanity';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home({ homepageData }) {
  const router = useRouter();
  const { locale } = router;

  const [pageData, setPageData] = useState(() =>
    homepageData.find((data) => data.language === locale) || homepageData.find((data) => data.language === 'en')
  );

  useEffect(() => {
    const currentPageData =
      homepageData.find((data) => data.language === locale) || homepageData.find((data) => data.language === 'en');
    setPageData(currentPageData);
  }, [locale, homepageData]);

  useEffect(() => {
    const isRtl = locale === 'ar'; 
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  }, [locale]);

  if (!pageData) {
    return <div>No content available for this language.</div>;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Riddara</title>
        
      </Head>
      <Header />
      <LanguageSwitcher />
      <main>
        <h1>{pageData.bannerSection.heading}</h1>
        {pageData.bannerSection.button2 && (
          <button>
            {pageData.bannerSection.button2.text}
          </button>
        )}
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const query = `*[_type == "homepage"]{
		_id,
		title,
		"language": language,
		bannerSection {
		  riddaraLogo {
			asset-> {
			  _id,
			  url
			},
			alt
		  },
		  heading,
		  subheading,
		  button1 {
			text,
			link
		  },
		  button2 {
			text,
			link
		  },
		  imageCarousel[] {
			asset-> {
			  _id,
			  url
			},
			alt
		  }
		},
		seo {
		  metaTitle,
		  metaDescription,
		  metaKeywords,
		  openGraphImage {
			asset-> {
			  _id,
			  url
			},
			alt
		  }
		}
	  }`;

  const homepageData = await sanityClient.fetch(query);

  return {
    props: { homepageData },
    revalidate: 10,
  };
}
