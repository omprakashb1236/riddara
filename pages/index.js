import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google';
import { sanityClient } from '../sanity';
import { urlFor } from '../lib/sanity';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
})

export default function Home({ homeassets }) {

  return (
    <>
      <Head>
        <title>Riddara</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192"  href="/fav/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png"/>
<link rel="manifest" href="/fav/manifest.json"/>

<meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png"/>

      </Head>

      <main>
        <div className='logo'>


          {homeassets[0].riddara_logo && (
            <Image
              src={urlFor(homeassets[0].riddara_logo.asset._ref).url()}
              width={230}
              height={22}
            />
          )}

        </div>
        <div className='banner'>
          {homeassets[0].banner_image && (
            <Image
              src={urlFor(homeassets[0].banner_image.asset._ref).url()}
              layout="fill"
              objectFit="cover"
              alt="banner image"
            />
          )}

        </div>
        <div className='content-image'>
          

          {homeassets[0].main_content_image && (
            <Image
              src={urlFor(homeassets[0].main_content_image.asset._ref).url()}
              width={492}
              height={158}
              alt="content"
            />
          )}

        </div>
        <div className='bottom-content d-flex'>
          <div className='copy-right-txt'>
            {homeassets[0].agmc_image && (
              <Image
                src={urlFor(homeassets[0].agmc_image.asset._ref).url()}
                width={80}
                height={20}
                alt="agmc-logo"
              />
            )}

            <span className={montserrat.className}>© 2024 Riddara. All Rights Reserved.</span>
          </div>

          <div className='footer-logo'>
            
            {homeassets[0].footer_logo && (
              <Image
                src={urlFor(homeassets[0].footer_logo.asset._ref).url()}
                width={265}
                height={61}
                alt="hello UAE"
              />
            )}

          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const query = `*[_type == "homeassets"]{
  riddara_logo, 
  main_content_image, 
  banner_image, 
  agmc_image, 
  footer_logo
}`;

  const homeassets = await sanityClient.fetch(query);
  return {
    props: {
      homeassets
    }
  };
}