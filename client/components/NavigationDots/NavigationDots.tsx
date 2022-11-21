import { NextComponentType } from 'next'
import React from 'react'

import useStore from '../../store';
import styles from './NavigationDots.module.scss';
import cssVar from '../../styles/variables.module.scss';
import globalStyles from '../../styles/Home.module.scss';

interface PropsInterface {
  active: string;
}

const NavigationDots: NextComponentType<{}, {}, PropsInterface> = ({ active }) => {
  const { theme } = useStore();

  const activeColor = theme ? cssVar.grayBlackColor : cssVar.veryLightGrayColor;

  return (
    <div className={styles.app__navigation}>
        { ['home', 'about', 'work', 'skills'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className={`${styles.app__navigationDot} ${theme ? styles.app__navigationDotLight : styles.app__navigationDotDark}`}
                style={active === item ? { backgroundColor: activeColor} : { }}
            />
        )) }
    </div>
  )
}

export default NavigationDots