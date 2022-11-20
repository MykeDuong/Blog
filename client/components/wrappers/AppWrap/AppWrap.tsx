import React from 'react'
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
  classNames?: string;
}

const AppWrap = ({ children, idName, classNames}: PropsInterface) => {
  const { theme, changeTheme } = useStore();

  return (
    <div id={idName} className={`${globalStyles.app} ${classNames} ${theme ? globalStyles.appLight : globalStyles.appDark}`}>
      <NavBar />
      <StickySocialMedia />
      {children}
      <Contact />
      {/* Change theme button */}
      <button className={`${styles.themeIcon} ${theme ? styles.themeIconLight : styles.themeIconDark}`} onClick={changeTheme}>
        <MdLightMode />
      </button>
    </div>
  )

}

export default AppWrap;