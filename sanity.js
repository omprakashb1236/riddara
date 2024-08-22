import { createClient } from 'next-sanity';

export const sanityClient = createClient({
    projectId: "l4vk9tb7",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
});