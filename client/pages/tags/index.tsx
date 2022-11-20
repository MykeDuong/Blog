import { GetStaticProps, InferGetStaticPropsType, NextComponentType, NextPage } from 'next'
import React from 'react'
import { AiFillTag } from 'react-icons/ai'

import Header from '../../components/Header/Header';
import styles from './Tag.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import client from '../../client';
import TagInterface from '../../interfaces/TagInterface';
import Button from '../../components/Button/Button';
import Link from 'next/link';
import useStore from '../../store';

const Tags: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ tags }) => {
  const { theme } = useStore();
  return (
    <div className={globalStyles.app} >
      <Header title="Tags" subtitle="Right now, what I know" mainPage={true} mainImage="tagIMG" />
      <div className={styles.app__tagMain}>
        <div className={styles.app__tagList}>
          {tags.map((tag: TagInterface) => <Button text={tag.title} type={'tag'} link={`#${tag.title}`} key={`button of ${tag.title}`} />)}
        </div>
        <div className={styles.app__tagContents}>
          {tags.map((tag: TagInterface) => 
          <div key={`content of ${tag.title}`} className={`${styles.app__tagContent} ${theme ? styles.app__tagContentLight : styles.app__tagContentDark}`} id={tag.title}>
            <div className={`${styles.tagTitle} ${theme ? styles.tagTitleLight : styles.tagTitleDark}`} ><AiFillTag /><p>{tag.title}</p></div>
            <div className={styles.app__tagPosts}>
              {tag.posts.map(post => (
                <Link key={`link of ${post.title}`} href={`blogs/${post.slug.current}`}><a className={`${styles.postTitle} ${theme ? styles.postTitleLight : styles.postTitleDark}`}>{post.title}</a></Link>
              ))}
            </div>
          </div>)}
        </div>
      </div>
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