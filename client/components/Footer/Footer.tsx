import { NextComponentType } from "next";
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";

import styles from "./Footer.module.scss";
import globalStyles from '../../styles/Home.module.scss';

const Footer: NextComponentType = () => {
  return (
    <div className={styles.app__footer}>
      <div className={styles.contact}>
        <div className={styles.socialMediaCircle}><RiGithubFill /></div>
        <div className={styles.socialMediaCircle}><RiLinkedinFill /></div>
        <div className={styles.socialMediaCircle}><RiFacebookFill /></div>
      </div>
      <p className={styles.copyright}>Copyright @Minh Duong 2022</p>
    </div>
  )
}

export default Footer;