import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-10-24',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

export default client;

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}