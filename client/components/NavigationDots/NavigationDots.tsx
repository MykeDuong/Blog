import { NextComponentType } from 'next'
import React from 'react'

import styles from './NavigationDots.module.scss';
import globalStyles from '../../styles/Home.module.scss';

interface PropsInterface {
  active: string;
}

const NavigationDots: NextComponentType<{}, {}, PropsInterface> = ({ active }) => {
  return (
    <div className={styles.app__navigation}>
        { ['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <a
                href={`#${item}`}
                key={item + index}
                className={styles.app__navigationDot}
                style={active === item ? { backgroundColor: '#313BAC' } : { }}
            />
        )) }
    </div>
  )
}

export default NavigationDots