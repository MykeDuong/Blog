import { NextComponentType } from 'next';
import React from 'react'
import NavigationDots from '../NavigationDots/NavigationDots';
import StickySocialMedia from '../StickySocialMedia/StickySocialMedia';

import globalStyles from '../../styles/Home.module.scss';

interface PropsInterface {
  Component: NextComponentType;
  idName: string;
  classNames: string;
}

const PortfolioWrap: NextComponentType<{}, {}, PropsInterface> = ({ Component, idName, classNames} ) => {
  return (
    <div id={idName} className={`${globalStyles.app__container} ${classNames}`}>
      <StickySocialMedia />

      <div className={`${globalStyles.app__wrapper} ${globalStyles.app__flex}`}>
        <Component />

        <div className={globalStyles.copyright}>
          <p className={globalStyles.pText}>@2022 Minh Duong</p>
          <p className={globalStyles.pText}>All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )

}

export default PortfolioWrap;