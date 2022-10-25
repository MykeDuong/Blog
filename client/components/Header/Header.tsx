import React, { useState } from 'react';
import { NextComponentType } from 'next';

import styles from "./Header.module.scss";
import globalStyles from '../../styles/Home.module.scss';

const Header: NextComponentType = () => {
  console.log(styles);
  console.log(globalStyles);
  return (
    <div>
      <div className={`${styles.app__header} ${globalStyles.app__flex}`} >
        <h1 className={globalStyles.headText}>minh duong's blog</h1>
      </div>
      <div style={{ marginTop: -140 }}>
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
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