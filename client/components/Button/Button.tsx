import React, { useState } from 'react'
import { NextComponentType } from 'next'

import styles from './Button.module.scss'
import { useRouter } from 'next/router';
import useStore from '../../store';

interface Props {
  text: string;
  subText?: string;
  type?: string;
  link?: string;
  onClick?: () => {};
}

const Button: NextComponentType<{}, {}, Props> = ({ type, text, subText, link, onClick }) => {
  const [clicked, setClicked] = useState(false);
  const { theme } = useStore();

  const router = useRouter();

  const handleClick = () => {
    setClicked(true);

    if (onClick) {
      onClick();
    }

    if (link) {
      router.push(link, undefined, { scroll: true });
    }
  }

  return (
      <button className={`${styles.button} ${type === "tag" ? styles.tag : styles.normal} ${theme ? styles.buttonLight : styles.buttonDark}`} onClick={handleClick}>
        <p className={`${styles.text}`}>{(subText && clicked) ? subText : text}</p>
      </button>
  )
}

export default Button