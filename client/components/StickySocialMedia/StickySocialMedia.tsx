import { NextComponentType } from 'next'
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import styles from "./StickySocialMedia.module.scss";
import globalStyles from '../../styles/Home.module.scss';

const StickySocialMedia: NextComponentType = () => {
  return (
    <div className={styles.app__social}>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
}

export default StickySocialMedia