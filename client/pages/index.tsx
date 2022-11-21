import type { NextPage } from 'next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import client from '../client';

import globalStyles from '../styles/Home.module.scss';
import styles from './Root.module.scss';
import cssVar from '../styles/variables.module.scss';

import useStore from '../store';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction'
import Contents from '../components/Contents/Contents';
import ContentList from '../components/ContentList/ContentList';

import PostInterface from '../interfaces/PostInterface';
import { AuthorInterface } from '../interfaces/AuthorInterface';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>, {}> = ({ author, posts }) => {
  const { theme } = useStore();

  return (
    <div  >
      <Header title="" subtitle="" mainImage="" mainPage={false}  />
      <Introduction author={author}/>
      <div className={styles.app__homeMain}>
        <Contents contents={posts} />
        <div className={styles.app__homeMainAdditionalInfo}>
          <ContentList contents={posts} />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const authors: AuthorInterface[] = await client.fetch(`*[_type == "author"]{..., "imageUrl": image.asset->url}`)
  const author = authors[0];

  const posts: PostInterface[] = await client.fetch(`*[_type == "post"]{
    ...,
    tags[]->,
    "mainImageUrl": mainImage.asset->url,
    author->
  } | order(publishedAt desc)`)



  return {
    props: {
      author,
      posts
    },
  }
}

export default Home
