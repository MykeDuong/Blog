import { GetStaticProps, InferGetStaticPropsType, NextComponentType, NextPage } from 'next'
import React from 'react'
import { AiFillTag } from 'react-icons/ai'

import { images } from '../../constants';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import ContentList from '../../components/ContentList/ContentList';
import Footer from '../../components/Footer/Footer';
import styles from './Tag.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import client from '../../client';
import TagInterface from '../../interfaces/TagInterface';
import Button from '../../components/Button/Button';
import Link from 'next/link';

const Tags: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ tags }) => {
  return (
    <div className={globalStyles.app} >
      <NavBar />
      <Header title="Tags" subtitle="" mainPage={true} mainImage="tagIMG" />
      <div className={styles.app__tagMain}>
        <div className={styles.app__tagList}>
          {tags.map((tag: TagInterface) => <Button text={tag.title} type={'tag'} link={`#${tag.title}`} key={`button of ${tag.title}`} />)}
        </div>
        <div className={styles.app__tagContents}>
          {tags.map((tag: TagInterface) => 
          <div key={`content of ${tag.title}`} className={styles.app__tagContent} id={tag.title}>
            <div className={styles.tagTitle} ><AiFillTag /><p>{tag.title}</p></div>
            <div className={styles.app__tagPosts}>
              {tag.posts.map(post =>
              <p key={`post of ${post.title}`} className={styles.postTitle} >
                <Link href={`blogs/${post.slug.current}`}>{post.title}</Link>
              </p>)}
            </div>
          </div>)}
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