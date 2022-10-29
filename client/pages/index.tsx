import type { NextPage } from 'next';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useState, useEffect} from 'react';
import client from '../client';

import globalStyles from '../styles/Home.module.scss';
import styles from './Root.module.scss';

import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction'
import Contents from '../components/Contents/Contents';
import ContentList from '../components/ContentList/ContentList';
import Footer from '../components/Footer/Footer';

import PostInterface from '../interfaces/PostInterface';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>, {}> = ({ author }) => {
  const [posts, setPosts] = useState([] as PostInterface[]);

  useEffect(() => {
    const contentQuery = `*[_type == "post"]{
      ...,
      "mainImageUrl": mainImage.asset->url,
      author->
    } | order(publishedAt desc)`;

    client.fetch(contentQuery)
      .then((data) => {
        setPosts(data);
      });
  }, []);


  return (
    <div className={globalStyles.app} >
      <NavBar />
      <Header />
      <Introduction author={author}/>
      <div className={styles.app__homeMain}>
        <Contents contents={posts} />
        <div className={styles.app__homeMainAdditionalInfo}>
          <ContentList contents={posts} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const authors = await client.fetch(`*[_type == "author"]{..., "imageUrl": image.asset->url}`)
  const author = authors[0];

  return {
    props: {
      author,
    },
  }
}

export default Home
