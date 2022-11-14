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
        <a target="_blank" href="https://github.com/MykeDuong" rel="noopener noreferrer" className={styles.socialMediaCircle}><RiGithubFill /></a>
        <a target="_blank" href="https://www.linkedin.com/in/mykeduong/" rel="noopener noreferrer" className={styles.socialMediaCircle}><RiLinkedinFill /></a>
        <a target="_blank" href="https://www.facebook.com/hongminh4402" rel="noopener noreferrer" className={styles.socialMediaCircle}><RiFacebookFill /></a>
      </div>
      <p className={styles.copyright}>Copyright @Minh Duong 2022</p>
    </div>
  )
}

export default Footer;