import type { NextPage } from 'next'

import styles from '../styles/Home.module.scss';

import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <Header />
  </div>
  )
}

export default Home
