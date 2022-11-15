import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import React from 'react'

import client from '../../client'
import { AuthorInterface } from '../../interfaces/AuthorInterface'
import ExperienceInterface from '../../interfaces/ExperienceInterface'
import SkillInterface from '../../interfaces/SkillInterface'

const Portfolio: NextPage<InferGetStaticPropsType<typeof getStaticProps>, {}> = ({ author, experiences, skills, works }) => {
  
  
  return (
    <div>index</div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const author: AuthorInterface = await client.fetch(`*[_type == "author"]{..., "imageUrl": image.asset->url}[0]`);
  const experiences: ExperienceInterface[] = await client.fetch('*[_type == "experiences"] | order(year desc)');
  const skills: SkillInterface[] = await client.fetch('*[_type == "skills"]{..., "imageUrl": icon.asset->url}');
  const works = await client.fetch('*[_type == "works"]{..., "imageUrl": imgUrl.asset->url}');

  return {
    props: {
      author,
      experiences,
      skills,
      works
    },
  }
}

export default Portfolio;