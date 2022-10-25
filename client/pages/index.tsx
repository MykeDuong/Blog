import type { NextPage } from 'next'

import globalStyles from '../styles/Home.module.scss';
import styles from './Root.module.scss';

import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import ContentList from '../components/ContentList/ContentList';

const Home: NextPage = () => {
  return (
    <div className={globalStyles.app} >
      <NavBar />
      <Header />
      <div className={styles.app__homeMain}>
        <div className={styles.app__homeMainContents} >

        </div>
        <ContentList contentType="posts" />
      </div>
    </div>
  )
}

export default Home
