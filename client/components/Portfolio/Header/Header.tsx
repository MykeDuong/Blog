import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/future/image'

import { images } from '../../../constants';
import PortfolioWrap from '../../wrappers/PortfolioWrap';

import styles from './Header.module.scss';
import globalStyles from '../../../styles/Home.module.scss';
import { NextComponentType } from 'next';

export interface PropsInterface {
  author: {
    imageUrl: string;
  }
}

const Header: NextComponentType<{}, {}, PropsInterface> = ({ author }) => {

  const scaleVariants= {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className={`${styles.app__header} ${styles.home} ${globalStyles.app__primarybg} ${globalStyles.app__flex}`}>
      <motion.div
        animate={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration:  0.8 }}
        className={`${styles.app__headerInfo}`}
      >
        <div className={styles.app__headerBadge}>
          <div className={`${styles.badgeCmp} ${globalStyles.app__flex}`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={globalStyles.pText}>Hello, I am</p>
              <h1 className={globalStyles.headText}>Minh</h1>
            </div>
          </div>

          <div className={`${styles.tagCmp} ${globalStyles.app__flex}`}>
            <p className={globalStyles.pText}>CS/Econ student @University of Arizona</p>
            <p className={globalStyles.pText}>Web/Mobile App Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration:  0.8, delayChildren: 0.8 }}
        className={styles.app__headerImg}
      >
        <div className={styles.app__headerAvatar}>
          <Image src={author.imageUrl} alt="Author's image" fill={true} />
        </div>
        <motion.div
          whileInView={{scale: [0, 1]}}
          transition={{ duration:  1, ease: 'easeInOut' }}
          className={styles.overlayCircle}
        >
          <Image 
            src={images.circle}
            alt="profile_circle"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles.app__headerCircles}
      >
        {[images.flutter, images.react, images.node].map((circle, index) => (
          <div className={`${styles.circleCmp} ${styles.app__flex}`} key={`circle-${index}`} >
            <Image src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header;