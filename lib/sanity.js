import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "l4vk9tb7",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}