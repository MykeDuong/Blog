import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/future/image';

import cssVar from '../../styles/variables.module.scss';

import { images } from '../../constants';
import client from '../../client'
import { AuthorInterface } from '../../interfaces/AuthorInterface'
import ExperienceInterface from '../../interfaces/ExperienceInterface'
import WorkInterface from '../../interfaces/WorkInterface'
import SkillInterface from '../../interfaces/SkillInterface'

import styles from './Portfolio.module.scss';
import globalStyles from '../../styles/Home.module.scss';

import { Profile, About, Work } from '../../components/Portfolio';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';

const Portfolio: NextPage<InferGetStaticPropsType<typeof getStaticProps>, {}> = ({ author, domains, experiences, skills, works }) => {
  
  return (
    <div className={globalStyles.app}>
      <NavBar />
      <Header title={'Portfolio'} subtitle={'My Coding Journey'} mainPage={false} mainImage={images.portfolioIMG} color={cssVar.primaryColor}/>
      <Profile author={author} />
      <About domains={domains}/>
      <Work works={works} />
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