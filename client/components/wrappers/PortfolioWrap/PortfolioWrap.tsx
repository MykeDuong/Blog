import { NextComponentType } from 'next';
import React from 'react'
import { motion } from 'framer-motion';
import NavigationDots from '../../NavigationDots/NavigationDots';
import StickySocialMedia from '../../StickySocialMedia';


import cssVar from '../../../styles/variables.module.scss';
import globalStyles from '../../../styles/Home.module.scss';
import useStore from '../../../store';

interface PropsInterface {
  children: JSX.Element|JSX.Element[];
  idName: string;
  classNames: string;
}

const PortfolioWrap = ({ children, idName, classNames}: PropsInterface) => {
  const { theme } = useStore();
  return (
    <div id={idName} className={`${globalStyles.app__container} ${classNames}`}>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className={`${globalStyles.app__wrapper} ${globalStyles.app__flex}`}
        >
          {children}
        <div className={globalStyles.copyright}>
          <p className={`${globalStyles.pText}`} style={theme ? { color: cssVar.grayBlackColor} : { color: cssVar.lightGrayColor }}>@2022 Minh Duong</p>
          <p className={`${globalStyles.pText}`} style={theme ? { color: cssVar.grayBlackColor} : { color: cssVar.lightGrayColor }}>All rights reserved</p>
        </div>
        </motion.div>
      <NavigationDots active={idName} />
    </div>
  )

}

export default PortfolioWrap;