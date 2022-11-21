import React, { useEffect, useState } from 'react'
import StickySocialMedia from '../../StickySocialMedia'

import useStore, { StateInterface } from '../../../store';
import styles from './AppWrap.module.scss'
import variables from '../../../styles/variables.module.scss';
import globalStyles from '../../../styles/Home.module.scss';
import NavBar from '../../NavBar/NavBar';
import { Contact } from '../../Portfolio';

import { MdLightMode } from 'react-icons/md'


interface PropsInterface {
  children: JSX.Element|JSX.Element[];
  idName?: string;
}

const AppWrap = ({ children, idName }: PropsInterface) => {
  const { theme, changeTheme } = useStore();

  const [isHydrated, setIsHydrated] = useState(false);

    //Wait till NextJS rehydration completes
    useEffect(() => {
        setIsHydrated(true);
    }, []);

  return (
    <>
      {!isHydrated ? <div /> : 
        <div id={idName} className={`${globalStyles.app} ${styles.app__wrap} ${theme ? globalStyles.appLight : globalStyles.appDark}`}>
          <NavBar />
          <StickySocialMedia />
          {children}
          <Contact />
          {/* Change theme button */}
          <button className={`${styles.themeIcon} ${theme ? styles.themeIconLight : styles.themeIconDark}`} onClick={changeTheme}>
            <MdLightMode />
          </button>
        </div>
      }
    </>
  )

}

export default AppWrap;