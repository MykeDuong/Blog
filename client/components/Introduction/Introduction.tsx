import { NextComponentType } from 'next'

import { AuthorInterface } from '../../interfaces/AuthorInterface';
import styles from './Introduction.module.scss';
import Image from 'next/future/image';
import Link from 'next/link';

import globalStyles from '../../styles/Home.module.scss';
import cssVar from '../../styles/variables.module.scss';
import useStore from '../../store';

interface Props {
  author: AuthorInterface;
}

const Introduction: NextComponentType<{}, {}, Props> = ({ author }) => {
  const { theme } = useStore();
  
  return (
    <div className={`${styles.app__introduction} ${theme ? styles.app__introductionLight : styles.app__introductionDark }`}>
      <div className={`${styles.app__introductionImageBox}`}>
        <Image src={author.imageUrl} alt="Author's image" fill={true} />
      </div>
      <div className={`${styles.app__introductionTextBox} ${theme ? styles.app__introductionTextBoxLight : styles.app__introductionTextBoxDark}`}>
        <h1 className={`${styles.welcome} ${theme ? styles.welcomeLight : styles.welcomeDark}`}><span>👋🏻</span>  Hello! And welcome to my blog!</h1>
        <p className={`${styles.introductionText} ${theme ? styles.introductionTextLight : styles.introductionTextDark}`}>I am Minh, a Computer Science & Economics student at the University of Arizona</p>
        <p className={`${styles.introductionText} ${theme ? styles.introductionTextLight : styles.introductionTextDark}`}><Link href="/portfolio"><a className={`${globalStyles.app__anchorText} ${theme ? globalStyles.app__anchorTextLight : globalStyles.app__anchorTextDark}`}>Click here</a></Link> to see my portfolio. Otherwise, check out my blogs down below! Thank you for coming by!</p>
      </div>
    </div>
  )
}

export default Introduction