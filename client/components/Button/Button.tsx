import React from 'react'
import { NextComponentType } from 'next'

import styles from './Button.module.scss'

interface Props {
  text: string;
  type: string;
}

const Button: NextComponentType<{}, {}, Props> = ({ type, text }) => {
  return (
    <button className={`${styles.button} ${type === "tag" ? styles.tag : styles.normal}`}>
      <p className={styles.text}>{text}</p>
    </button>
  )
}

export default Button