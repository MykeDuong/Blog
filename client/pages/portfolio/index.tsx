import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import React from 'react'

import cssVar from '../../styles/variables.module.scss';

import { images } from '../../constants';
import client from '../../client'
import { AuthorInterface } from '../../interfaces/AuthorInterface'
import ExperienceInterface from '../../interfaces/ExperienceInterface'
import WorkInterface from '../../interfaces/WorkInterface'
import SkillInterface from '../../interfaces/SkillInterface'

import styles from './Portfolio.module.scss';
import globalStyles from '../../styles/Home.module.scss';

import { Profile, About, Work, Skills } from '../../components/Portfolio';
import Header from '../../components/Header/Header';
import useStore from '../../store';

const Portfolio: NextPage<InferGetStaticPropsType<typeof getStaticProps>, {}> = ({ author, domains, experiences, skills, works }) => {
 
  const { theme } = useStore();

  return (
    <div className={globalStyles.app}>
      <div className={styles.app__portfolio}>
      <Header title={'Portfolio'} subtitle={'My Coding Journey'} mainPage={false} mainImage={images.portfolioIMG} color={theme ? cssVar.alternativeColor: cssVar.grayBlackColor}/>
      <Profile author={author} />
      <About domains={domains}/>
      <Work works={works} />
      <Skills skills={skills} experiences={experiences} />

      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const author: AuthorInterface = await client.fetch(`*[_type == "author"]{..., "imageUrl": image.asset->url}[0]`);
  const experiences: ExperienceInterface[] = await client.fetch('*[_type == "experiences"] | order(year desc)');
  const domains = await client.fetch('*[_type == "domains"]{..., "imageUrl": image.asset->url}');
  const skills: SkillInterface[] = await client.fetch('*[_type == "skills"]{..., "imageUrl": icon.asset->url}');
  const works: WorkInterface[] = await client.fetch('*[_type == "works"]{..., "imageUrl": imgUrl.asset->url}');


  return {
    props: {
      author,
      domains,
      experiences,
      skills,
      works
    },
  }
}

export default Portfolio;
