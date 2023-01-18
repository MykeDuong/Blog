import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'
import { RiContactsBookLine } from 'react-icons/ri';

interface ContactInterface {
  _type: 'contact',
  name: string,
  email: string,
  message: string,
}


const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-10-24',
  useCdn: true,
  token: process.env.NEXT_SENDER_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(500).json({ message: "Authorization error"})
  }

  const { body } = req;


  client.create(body)

  return res.status(200).json({ message: "Success"});

}

export default handler;