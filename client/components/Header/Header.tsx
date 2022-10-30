import React, { useState } from 'react';
import { NextComponentType } from 'next';
import Image from 'next/future/image';

import styles from "./Header.module.scss";
import globalStyles from '../../styles/Home.module.scss';
import { url } from 'inspector';

interface Props {
  title: string;
  subtitle: string;
  mainImage: string;
}

const Header: NextComponentType<{}, {}, Props> = ({ title, subtitle, mainImage }) => {
  console.log(title);
  return (
    <div>
      <div className={`${styles.app__header} ${globalStyles.app__flex}`} >
        <Image className={styles.app__headerImage} src={mainImage !== '' ? mainImage : '/public/assets/bgIMG.jpeg' } alt="main image" fill />
        <h1 className={styles.title}>{title !== "" ? title : "minh duong's blog"}</h1>
        <p className={`${styles.pText}`}>{subtitle !== "" ? subtitle : "Coding thoughts and experiences"}</p>
      </div>
      <div style={{ marginTop: -130 }}>
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Header