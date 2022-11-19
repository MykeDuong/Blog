import { NextComponentType } from 'next'
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import styles from "./StickySocialMedia.module.scss";

const StickySocialMedia: NextComponentType = () => {
  return (
    <div className={styles.app__stickySocial}>
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