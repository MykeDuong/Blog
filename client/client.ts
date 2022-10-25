import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-10-24',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});