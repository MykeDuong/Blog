import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/future/image';

import { images } from '../../constants';
import styles from './NavBar.module.scss';
import globalStyles from '../../styles/Home.module.scss'
import { NextComponentType } from 'next';
import Link from 'next/link';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 20 || scrollY - lastScrollY < -20)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const NavBar: NextComponentType = () => {
  const [toggle, setToggle] = useState(false);
  const scrollDirection = useScrollDirection()

  return (
    <nav className={`${styles.app__navbar} ${ scrollDirection === "down" ? styles.hide : "show"}`}>
      <div className={styles.app__navbarLogo}>
        <Link href='/'><div><Image src={images.logo} alt='logo' /></div></Link>
      </div>
      <ul className={styles.app__navbarLinks}>
        { ['home', 'portfolio', 'tags'].map((item) => (
          <li className={`${globalStyles.pText} ${globalStyles.app__flex}`} key={`link-${item}`} >
            <div />
            <Link href={`/${item}`}>{item}</Link>
          </li>
        )) }
      </ul>

      <div className={styles.app__navbarMenu}>
          <HiMenu onClick={() => setToggle(true)} />
          
          {toggle && (
            <motion.div 
              animate={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul>
                { ['home', 'portfolio', 'tags'].map((item) => (
                  <li key={item} >
                    <Link href={`/${item}`} onClick={() => setToggle(false)}>{item}</Link>
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