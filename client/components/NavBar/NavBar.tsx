import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/future/image';

import { images } from '../../constants';
import styles from './NavBar.module.scss';
import globalStyles from '../../styles/Home.module.scss'
import { NextComponentType } from 'next';

const NavBar: NextComponentType = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbarLogo}>
          <Image src={images.logo} alt='logo' />
      </div>
      <ul className={styles.app__navbarLinks}>
        { ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className={`${globalStyles.pText} ${globalStyles.app__flex}`} key={`link-${item}`} >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        )) }
      </ul>

      <div className={styles.app__navbarMenu}>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          
          {toggle && (
            <motion.div 
              animate={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul>
                { ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item} >
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                )) }
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default NavBar