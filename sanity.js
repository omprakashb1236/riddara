import { createClient } from 'next-sanity';

export const sanityClient = createClient({
    projectId: "si72dxf5",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
});