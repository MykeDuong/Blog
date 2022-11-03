import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/future/image';

import { images } from '../../constants';
import styles from './NavBar.module.scss';
import globalStyles from '../../styles/Home.module.scss'
import { NextComponentType } from 'next';
import Link from 'next/link';

function useScrollDirection() {
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
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
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