import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { sanityClient } from '../sanity';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { urlFor } from '../lib/sanity';
import Image from 'next/image'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
})

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
      <LanguageSwitcher />
      <main>
        <div className='banner'>
          {pageData && (
            <Image
              src={urlFor(pageData.bannerSection.bannerImage.asset).url()}
              width={1440}
              height={1024}
              alt="banner image"
              className='banner-img'
            />
          )}

          <div className='banner-txt'>
            <div className='bnr-logo'>
              {pageData.bannerSection && (
                <Image
                  src={urlFor(pageData.bannerSection.riddaraLogo.asset).url()}
                  width={230}
                  height={22}
                />
              )}
            </div>
            <h1>{pageData.bannerSection.heading}</h1>
            <h2>{pageData.bannerSection.subheading}</h2>
            <div className='btn-group d-flex justify-content-between'>
              {pageData.bannerSection.button2 && (
                <button>
                  {pageData.bannerSection.button2.text}
                </button>
              )}
              {pageData.bannerSection.button1 && (
                <button>
                  {pageData.bannerSection.button1.text}
                </button>
              )}
            </div>
          </div>
        </div>
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
      bannerImage {
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
