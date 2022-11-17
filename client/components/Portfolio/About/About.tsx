import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/future/image'

import { urlFor } from '../../../client';

import PortfolioWrap from '../../wrappers/PortfolioWrap';
import styles from  './About.module.scss';
import globalStyles from '../../../styles/Home.module.scss';
import { NextComponentType } from 'next';
import DomainInterface from '../../../interfaces/DomainInterface';

const About: NextComponentType<{}, {}, { domains: DomainInterface[] }> = ({ domains }) => {
  return (
    <PortfolioWrap idName={'about'} classNames={globalStyles.app__whitebg}>
    <div className={`${styles.app__about} ${globalStyles.app__flex}`}>
      <h2 className={globalStyles.headText}>I know that <span>Good Applications</span><br />mean <span>Good Businesses</span></h2>

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
            <h2 className={globalStyles.boldText} style={{ marginTop: 20 }}>{domain.title}</h2>
            <p className={globalStyles.pText} style={{ marginTop: 10 }}>{domain.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    </PortfolioWrap>
  )
}

export default About;