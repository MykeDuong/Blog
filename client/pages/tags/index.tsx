import { GetStaticProps, InferGetStaticPropsType, NextComponentType, NextPage } from 'next'
import React from 'react'

import { images } from '../../constants';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import ContentList from '../../components/ContentList/ContentList';
import Footer from '../../components/Footer/Footer';
import styles from './Tag.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import client from '../../client';
import TagInterface from '../../interfaces/TagInterface';

const Tags: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ tags }) => {
  console.log(tags);
  return (
    <div className={globalStyles.app} >
      <NavBar />
      <Header title="Tags" subtitle="" mainPage={true} mainImage="tagIMG" />
      <div className={styles.app__homeMain}>
        <div className={styles.app__homeMainAdditionalInfo}>
          <ContentList contents={tags} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const tags: TagInterface = await client.fetch(`*[_type == "tag"]{
    ...,
    "slug": {"current": title},
    "posts": *[_type == "post" && references(^._id)]{title, slug},
  } | order(title asc)`)

  return {
    props: {
      tags,
    },
  }
}

export default Tags