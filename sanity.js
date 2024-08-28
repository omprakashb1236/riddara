import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    projectId: "si72dxf5",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
    token:process.env.SANITY_API_TOKEN
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    return builder.image(source);
  }