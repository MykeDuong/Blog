import { NextComponentType } from 'next'
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import useStore from '../../store';

import styles from "./StickySocialMedia.module.scss";

const StickySocialMedia: NextComponentType = () => {
  const { theme } = useStore();
  
  return (
    <div className={`${styles.app__stickySocial} ${theme ? styles.app__stickySocialLight : styles.app__stickySocialDark}`}>
      <a href="https://github.com/MykeDuong" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/mykeduong/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://www.facebook.com/hongminh4402" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
    </div>
  )
}

export default StickySocialMedia