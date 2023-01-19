import React, { useState } from 'react';
import { NextComponentType } from 'next';
import Image, { StaticImageData } from 'next/future/image';

import useStore from '../../store';
import styles from "./Header.module.scss";
import globalStyles from '../../styles/Home.module.scss';
import cssVar from "../../styles/variables.module.scss";
import { images } from '../../constants';


interface Props {
  title: string;
  subtitle: string;
  mainPage?: boolean;
  mainImage: string | StaticImageData;
  color?: string;
  fill?: boolean;
}

const Header: NextComponentType<{}, {}, Props> = ({ title, subtitle, mainPage=false, mainImage, color, fill=false }) => {

  const { theme } = useStore();

  const defaultColor = theme ? cssVar.whiteColor : cssVar.darkThemeColor;

  return (
    <div
      className={`${styles.app__headerContainer}`}
    >
      <div className={`${styles.app__header} ${globalStyles.app__flex}`}  >
        {mainPage ?
          <Image className={styles.app__headerImage} src={mainImage !== '' ? images[`${mainImage}` as keyof typeof images] : images.bgIMG } alt="main image" fill /> :
          <Image className={styles.app__headerImage} src={mainImage !== '' ? mainImage : images.bgIMG } alt="main image" fill />
        }
        <h1 className={styles.title}>{title !== "" ? title : "minh duong's blog"}</h1>
        <p className={`${styles.subtitle}`}>{subtitle !== "" ? subtitle : "Coding thoughts and experiences"}</p>
      </div>
      <div className={styles.app__headerWaveBox}>
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill={color ? color : defaultColor } fillOpacity='0.7' />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill={color ? color: defaultColor } fillOpacity='0.5'  />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill={color ? color: defaultColor } fillOpacity='0.3'  />
            <use xlinkHref="#gentle-wave" x="48" y="7"  fill={color ? color: defaultColor }  />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Header