import React from 'react'
import { NextComponentType } from 'next'

import styles from './Button.module.scss'

interface Props {
  width: number;
  height: number;
  text: string;
}

const Button: NextComponentType<{}, {}, Props> = ({ width, height, text }) => {
  return (
    <button style={{ width, height }} className={styles.button}>
      <p className={styles.text}>{text}</p>
    </button>
  )
}

export default Button