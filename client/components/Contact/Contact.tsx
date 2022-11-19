import React, { ChangeEvent, useState } from 'react';
import { NextComponentType } from 'next';
import Image from 'next/future/image'

import { images } from '../../constants';
import { PortfolioWrap } from '../wrappers';
import cssVar from '../../styles/variables.module.scss';


import styles from './Contact.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import Button from '../Button';

const Contact: NextComponentType = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = (e.target as HTMLTextAreaElement | HTMLInputElement);
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async () => {

    if (!message) {
      return;
    }

    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
  }
  
  const color = cssVar.veryLightGrayColor;

  return (
    <div>
<div className={styles.app__headerWaveBox}>
        <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill={color ? color: 'rgba(255,255,255)' } fillOpacity='0.7' />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill={color ? color: 'rgba(255,255,255)' } fillOpacity='0.5'  />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill={color ? color: 'rgba(255,255,255)' } fillOpacity='0.3'  />
            <use xlinkHref="#gentle-wave" x="48" y="7"  fill={color ? color: '#fff' }  />
          </g>
        </svg>
      </div>
      <div className={styles.app__contact}>
        <h2 className={` ${globalStyles.headText} ${styles.app__contactHeader}`}>Take a coffee and chat with me</h2>

        <div className={styles.app__contactCards}>
          <div className={styles.app__contactCard}>
            <Image src={images.email} alt="email" />
            <a href="mailto:hongminh4402@gmail.com" className={globalStyles.pText}>hongminh4402@gmail.com</a>
          </div>
          <div className={styles.app__contactCard}>
            <Image src={images.mobile} alt="mobile" />
            <a href="tel: +1 (520) 910-8686" className={globalStyles.pText}>+1 (520) 910-8686</a>
          </div>
        </div>

        {!isFormSubmitted ? (
          <div className={`${styles.app__contactForm} ${globalStyles.app__flex}`}>
            <div className={globalStyles.app__flex}>
              <input className={globalStyles.pText} type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}/>
            </div>
            <div className={globalStyles.app__flex}>
              <input className={globalStyles.pText} type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}/>
            </div>
            <div>
              <textarea
                className={globalStyles.pText}
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className={globalStyles.pText} onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
            {/* <Button text={'Send Message'} subText={'Sending'} onClick={handleSubmit} /> */}
          </div>
        ) : (
          <div className={styles.thankyou}>
            <h3 className={`${globalStyles.headText}`}>Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
      </div>
  )
}

export default Contact;