import React from 'react'
import { NextComponentType } from 'next'

import styles from './Button.module.scss'
import Link from 'next/link';

interface Props {
  text: string;
  type: string;
  link: string;
}

const Button: NextComponentType<{}, {}, Props> = ({ type, text , link }) => {
  return (
    <Link href={link} scroll={true} >
      <button className={`${styles.button} ${type === "tag" ? styles.tag : styles.normal}`}>
        <p className={styles.text}>{text}</p>
      </button>
    </Link> 
  )
}

export default Button