import React, { useState } from 'react';
import { NextComponentType } from 'next';

import styles from "./Header.module.scss";
import globalStyles from '../../styles/Home.module.scss';

const Header: NextComponentType = () => {
  console.log(styles);
  console.log(globalStyles);
  return (
    <div className={`${styles.app__header} ${globalStyles.app__flex}`} >
      
    </div>
  )
}

export default Header