import { NextComponentType } from "next";
import { AiFillGithub } from 'react-icons/ai';

import styles from "./Footer.module.scss";
import globalStyles from '../../styles/Home.module.scss';

const Footer: NextComponentType = () => {
  return (
    <div className={styles.app__footer}>
      <div className={styles.contact}>
        <div className={styles.socialMediaCircle}><AiFillGithub /></div>
      </div>
      <p className={styles.copyright}>Copyright @Minh Duong 2022</p>
    </div>
  )
}

export default Footer;