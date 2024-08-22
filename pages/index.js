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
        <link rel="icon" href="/favicon.ico" />
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

  console.log(homeassets);
  return {
    props: {
      homeassets
    }
  };
}