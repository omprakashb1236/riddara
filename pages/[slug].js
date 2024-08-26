import React from 'react';
import { useRouter } from 'next/router';
import { sanityClient } from '../sanity';
import groq from 'groq';
import LanguageSwitcher from '../components/LanguageSwitcher';


const Page = ({ pageData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <h1>{pageData.title}</h1>
      <LanguageSwitcher />
    </div>
  );
};

export async function getStaticPaths() {
  const query = `*[_type == "page" && defined(slug.current)][].slug.current`;

  const paths = await sanityClient.fetch(query);



  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const query = groq`*[_type == "page" && slug.current == $slug][0]{
      title,
      "language": language,
      "slug": slug.current
    }`;

  const pageData = await sanityClient.fetch(query, { slug: params.slug });

  return {
    props: { pageData },
  };
}

export default Page;
