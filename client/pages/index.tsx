import type { NextPage } from 'next';
import { useState, useEffect} from 'react';
import client from '../client';

import globalStyles from '../styles/Home.module.scss';
import styles from './Root.module.scss';

import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Contents from '../components/Contents/Contents';
import ContentList from '../components/ContentList/ContentList';
import Footer from '../components/Footer/Footer';

import PostInterface from '../interfaces/PostInterface';

const Home: NextPage = () => {
  const [posts, setPosts] = useState([] as PostInterface[]);

  useEffect(() => {
    const contentQuery = `*[_type == "post"]{
      ...,
      author->
    }`;

    client.fetch(contentQuery)
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className={globalStyles.app} >
      <NavBar />
      <Header />
      <div className={styles.app__homeMain}>
        <Contents contents={posts} />
        <ContentList contents={posts} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
