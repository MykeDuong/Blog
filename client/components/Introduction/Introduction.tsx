import { NextComponentType } from 'next'

import { AuthorInterface } from '../../interfaces/AuthorInterface';
import client from '../../client';
import styles from './Introduction.module.scss';
import Image from 'next/future/image';

interface Props {
  author: AuthorInterface;
}

const Introduction: NextComponentType<{}, {}, Props> = ({ author }) => {
  return (
    <div className={styles.app__introduction}>
      <div className={styles.app__introductionTextBox}>
        <Image src={author.imageUrl} alt="Author's image" fill={true} />
      </div>
    </div>
  )
}

export default Introduction