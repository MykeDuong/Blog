import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/future/image'

import { urlFor } from '../../../client';

import { PortfolioWrap } from '../../wrappers';
import styles from  './About.module.scss';
import globalStyles from '../../../styles/Home.module.scss';
import { NextComponentType } from 'next';
import DomainInterface from '../../../interfaces/DomainInterface';
import useStore from '../../../store';

const About: NextComponentType<{}, {}, { domains: DomainInterface[] }> = ({ domains }) => {
  const { theme } = useStore();
  return (
    <PortfolioWrap idName={'about'} classNames={`${theme ? globalStyles.appLight : globalStyles.appDark}`}>
    <div className={`${styles.app__about} ${globalStyles.app__flex}`}>
      <h2 className={`${globalStyles.headText} ${theme ? globalStyles.headTextLight : globalStyles.headTextDark}`}>I know that <span>Good Technology</span><br />makes <span>Good Businesses</span></h2>

      <div className={styles.app__domains}>
        {domains.map((domain, index) => (
          <motion.div 
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={styles.app__domainItem}
            key={domain.title + index}
          >
            <div>
              <Image src={urlFor(domain.image).url()} alt={domain.title} fill={true}  />
            </div>
            <h2 className={`${globalStyles.boldText} ${theme ? globalStyles.boldTextLight : globalStyles.boldTextDark}`} style={{ marginTop: 20, textAlign: 'center', width: '100%' }}>{domain.title}</h2>
            <p className={`${globalStyles.pText} ${theme ? globalStyles.pTextLight : globalStyles.pTextDark}`} style={{ marginTop: 10, textAlign: 'center' }}>{domain.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    </PortfolioWrap>
  )
}

export default About;