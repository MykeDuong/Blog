import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/future/image';

import { images } from '../../constants';
import styles from './NavBar.module.scss';
import globalStyles from '../../styles/Home.module.scss'
import { NextComponentType } from 'next';
import Link from 'next/link';
import useStore from '../../store';
import { useRouter } from 'next/router';

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

const MenuVariants = {
  initial: {
    x: "110vw",
    opacity: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-110vw",
    opacity: 0.5,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const NavBar: NextComponentType = () => {
  const { theme } = useStore();

  const router = useRouter()
  const [toggle, setToggle] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <div style={{height: 0}}>
      <nav className={`${styles.app__navbar} ${theme ? styles.app__navbarLight : styles.app__navbarDark} ${ scrollDirection === "down" ? styles.hide : ''}`}>
        <div className={styles.app__navbarLogo}>
          <Link href='/'><a className={`${styles.app__navbarLogoText} ${theme ? styles.app__navbarLogoTextLight : styles.app__navbarLogoTextDark}`}>Minh Duong</a></Link>
        </div>
        <ul className={`${styles.app__navbarLinks} ${theme ? styles.app__navbarLinksLight : styles.app__navbarLinksDark}`}>
          {['home', 'portfolio', 'tags'].map((item) => (
            <li className={`${globalStyles.pText} ${globalStyles.app__flex}`} key={`link-${item}`} onClick={() => (router.push(`/${item === 'home' ? '' : item}`))} >
              <div />
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <HiMenu onClick={() => setToggle(true)}/>

          
      </nav>
      <div className={`${styles.app__navbarMenu} ${theme ? styles.app__navbarMenuLight : styles.app__navbarMenuDark}`}>
      {toggle && (
        <motion.div
          variants={MenuVariants}
        >
          <HiX onClick={() => setToggle(false)}/>
          <ul>
            { ['home', 'portfolio', 'tags'].map((item) => (
              <li key={item} >
                <Link href={`/${item === 'home' ? '' : item}`}><a  onClick={() => setToggle(false)}>{item}</a></Link>
              </li>
            )) }
          </ul>
        </motion.div>
      )}
  </  div>
  </div>
  )
}

export default NavBar