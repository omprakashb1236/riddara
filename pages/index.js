import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { sanityClient } from '../sanity';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { urlFor } from '../lib/sanity';
import Image from 'next/image'
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import PortableText from '@sanity/block-content-to-react';
import ColorScheme from '@/components/ColorScheme';
import VideoCarousel from '@/components/VideoCarousel';
import Specification from '@/components/Specification';
import Footer from '@/components/Footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
})

export default function Home({ homepageData }) {
  const router = useRouter();
  const { locale } = router;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('First Name is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last Name is required'),
      mobile: Yup.string()
        .matches(/^[0-9]+$/, 'Mobile number must be only digits')
        .min(10, 'Must be at least 10 digits')
        .max(15, 'Must be 15 digits or less')
        .required('Mobile number is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: async (values) => {
      try {
        const doc = {
          _type: 'bookTestDriveformSubmission',
          firstName: values.firstName,
          lastName: values.lastName,
          mobile: values.mobile,
          email: values.email,
        };
        await sanityClient.create(doc);
        alert('Form submitted successfully!');
      } catch (error) {
        console.error('Failed to submit form', error);
        alert('Failed to submit form, please try again.');
      }
    },
  });

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
            <h1 className={montserrat.className}>{pageData.bannerSection.heading}</h1>
            <h2 className={montserrat.className}>{pageData.bannerSection.subheading}</h2>
            <div className='btnGroup d-flex justify-content-between'>
              {pageData.bannerSection.button1 && (
                <Link className={`${montserrat.className} btn explore-btn`} href='#'>
                  {pageData.bannerSection.button1.text}
                </Link>
              )}
              {pageData.bannerSection.button2 && (
                <Link className={`${montserrat.className} btn test-drive-btn`} href='#'>
                  {pageData.bannerSection.button2.text}
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className='intro-txt'>
          <div className='intro-hdg'>
            <Image
              src='images/main-logo.svg'
              alt="logo"
              width={263}
              height={24}
            />

            <p className={montserrat.className}>{pageData.introtext.heading} </p>
          </div>
          <div className={`${montserrat.className} dtl-text`}>

            <PortableText
              className={montserrat.className}
              blocks={pageData.introtext.content}
            />
          </div>
        </div>

        <div className='thirdScreen'>
          <Image
            src={urlFor(pageData.thirdScreen.bgImage).url()}
            alt="thirdScreen Image"
            width={1440}
            height={720}
          />
        </div>
        <div className='car-collection'>
          <h2>{pageData.carColorModel.heading}</h2>
          <h3>{pageData.carColorModel.subHeading}</h3>
          <div className='rd6-logo'>
            <Image
              src='images/rd6-logo.svg'
              alt="logo"
              width={412}
              height={84}
            />
          </div>
          <ColorScheme images={pageData.carColorModel?.images || []} />
        </div>
        <Specification />
        <div className='videoCarousel'>
          <VideoCarousel videoCarousel={pageData.videoCarousel} />
        </div>
        <div className="seventhScreen">
          <Image
            src='/images/seventhScreen.png'
            alt="logo"
            width={1440}
            height={734}
          />
        </div>
        <div className='bookTestDrive'>
          <div className='btd-hdg'>
            <p>Register to book a </p>
            <h2>Test Drive with Riddara</h2>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className='row'>
              <div class="col-md-6">
                <div className='form-group'>
                  <input
                    id="firstName"
                    name="firstName"
                    className='form-control'
                    placeholder='First Name'
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    style={{
                      borderColor: formik.touched.firstName && formik.errors.firstName ? 'red' : '',
                    }}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='error-field' style={{ color: 'red' }}>{formik.errors.firstName}</div>
                  ) : null}
                </div>
              </div>
              <div class="col-md-6">
                <div className='form-group'>
                  <input
                    id="lastName"
                    className='form-control'
                    name="lastName"
                    placeholder='Last Name'
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    style={{
                      borderColor: formik.touched.lastName && formik.errors.lastName ? 'red' : '',
                    }}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className='error-field' style={{ color: 'red' }}>{formik.errors.lastName}</div>
                  ) : null}
                </div>

              </div>
            </div>

            <div className='row'>
              <div class="col-md-6"><div className='form-group'>
                <input
                  id="mobile"
                  className='form-control'
                  name="mobile"
                  placeholder='Contact Number'
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                  style={{
                    borderColor: formik.touched.mobile && formik.errors.mobile ? 'red' : '',
                  }}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div className='error-field' style={{ color: 'red' }}>{formik.errors.mobile}</div>
                ) : null}
              </div></div>
              <div class="col-md-6">
                <div className='form-group'>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email ddress'
                    className='form-control'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={{
                      borderColor: formik.touched.email && formik.errors.email ? 'red' : '',
                    }}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className='error-field' style={{ color: 'red' }}>{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='consent'><Image
            src='/images/radio-btn.svg'
            alt="logo"
            width={12}
            height={12}
          /> <span>I have read and agree to the <Link href="#">Privacy Policy.</Link></span></div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <Footer />
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
    introtext {
		  heading,
		  content
		},
    thirdScreen {
		  bgImage
		},
    "carColorModel": carColorModel{
    heading,
    subHeading,
    images[]{
      "imageUrl": asset->url,
      caption,
      color
    }
  },
"videoCarousel": {
    "heading": videoCarousel.heading,
    "subHeading": videoCarousel.subHeading,
    "videoItems": videoCarousel.videoItems[]{
      "videoUrl": video.asset->url,
      "title": title,
      "subtitle": subtitle
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
