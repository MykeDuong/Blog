import { NextComponentType } from 'next'

import { AuthorInterface } from '../../interfaces/AuthorInterface';
import client from '../../client';
import styles from './Introduction.module.scss';
import Image from 'next/future/image';
import Link from 'next/link';

import globalStyles from '../../styles/Home.module.scss';
import cssVar from '../../styles/variables.module.scss';

interface Props {
  author: AuthorInterface;
}

const Introduction: NextComponentType<{}, {}, Props> = ({ author }) => {
  return (
    <div className={styles.app__introduction}>
      <div className={styles.app__introductionImageBox}>
        <Image src={author.imageUrl} alt="Author's image" fill={true} />
      </div>
      <div className={styles.app__introductionTextBox}>
        <h1 className={styles.welcome}><span>👋🏻</span>  Hello! And welcome to my blog!</h1>
        <p className={styles.introductionText}>I am Minh, a Computer Science & Economics student at the University of Arizona</p>
        <p className={styles.introductionText}><Link href="/portfolio"><a className={globalStyles.app__anchor} style={{ color: cssVar.blackColor }}>Click here</a></Link> to see my portfolio. Otherwise, check out my blogs down below! Thank you for coming by!</p>
      </div>
    </div>
  )
}

export default Introduction