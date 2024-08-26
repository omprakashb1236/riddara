import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "si72dxf5",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export const fetchNavigationItems = async (locale) => {
  const query = `*[_type == "navigationItem"]{
    "title": title[$locale],
    "slug": slug.current
  }`;

  return await client.fetch(query, { locale });
};