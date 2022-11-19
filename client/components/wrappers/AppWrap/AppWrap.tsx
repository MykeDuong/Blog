import React from 'react'
import StickySocialMedia from '../../StickySocialMedia'

import styles from './AppWrap.module.scss'
import globalStyles from '../../../styles/Home.module.scss';
import NavBar from '../../NavBar/NavBar';
import { Contact } from '../../Portfolio';


interface PropsInterface {
  children: JSX.Element|JSX.Element[];
  idName?: string;
  classNames?: string;
}

const AppWrap = ({ children, idName, classNames}: PropsInterface) => {
  return (
    <div id={idName} className={`${globalStyles.app} ${classNames}`}>
      <NavBar />
      <StickySocialMedia />
      {children}
      <Contact />
    </div>
  )

}

export default AppWrap;