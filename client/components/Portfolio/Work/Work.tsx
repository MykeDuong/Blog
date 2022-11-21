import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import PortfolioWrap from '../../wrappers/PortfolioWrap/PortfolioWrap';
import { urlFor } from '../../../client';

import styles from './Work.module.scss';
import globalStyles from '../../../styles/Home.module.scss';
import { NextComponentType } from 'next';
import WorkInterface from '../../../interfaces/WorkInterface';
import Image from 'next/future/image';
import useStore from '../../../store';

const Work: NextComponentType<{}, {}, { works: WorkInterface[] } > = ({ works }) => {

  const { theme } = useStore();
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([...works]);

  // For styling
  const activeItemStyle = theme ? styles.itemActive : styles.itemActiveDark;
  const themeItemStyle = theme ? `${styles.app__workFilterItemLight} ${globalStyles.pTextLight}` : `${styles.app__workFilterItemDark} ${globalStyles.pTextDark}` 

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.types.includes(item)))
      }
    }, 500)
  }

  return (
    <PortfolioWrap idName={'work'} classNames={`${theme ? globalStyles.app__alternativebg : globalStyles.app__alternativebgDark}`}>
      <div>
        <h2 className={`${globalStyles.headText} ${theme ? globalStyles.headTextLight : globalStyles.headTextDark}`}>My Creative <span>Portfolio </span>Section</h2>
    
        <div className={`${styles.app__workFilter}`}>
          {['Web Application', 'Mobile Application', 'Desktop Application', 'All'].map((item, index) => (
            <div 
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`${styles.app__workFilterItem} ${globalStyles.app__flex} ${globalStyles.pText} ${themeItemStyle} ${activeFilter === item ? activeItemStyle : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
          
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={styles.app__workPortfolio}
        >
          {filterWork.map((work, index) => (
            <div className={`${styles.app__workItem} ${globalStyles.app__flex} ${theme ? styles.app__workItemLight : styles.app__workItemDark}`} key={index}>
              <div className={`${styles.app__workImg} ${globalStyles.app__flex}`}>
                <Image src={urlFor(work.imgUrl).url()} alt={work.title} fill />
          
                <motion.div
                  onHoverStart={e => {(e.target as HTMLDivElement).style.opacity = '1'}}
                  onHoverEnd={e => {(e.target as HTMLDivElement).style.opacity = '0'}}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className={`${styles.app__workHover} ${globalStyles.app__flex}`}
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className={globalStyles.app__flex}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
          
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className={globalStyles.app__flex}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
          
              <div className={`${styles.app__workContent} ${globalStyles.app__flex}`}>
                <h4 className={globalStyles.boldText}>{work.title}</h4>
                <p className={globalStyles.pText} style={{ marginTop: 10 }}>{work.description}</p>
          
                <div className={`${styles.app__workTypes} ${globalStyles.app__flex} ${theme ? styles.app__workTypesLight : styles.app__workTypesDark}`}>
                  <p className={`${globalStyles.pText} ${theme ? globalStyles.pTextLight : globalStyles.pTextDark}`}>{work.types[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </PortfolioWrap>
  )
}

export default Work