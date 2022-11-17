import React, { ChangeEvent, useState } from 'react';
import { NextComponentType } from 'next';
import Image from 'next/future/image'

import { images } from '../../../constants';
import PortfolioWrap from '../../wrappers/PortfolioWrap';

import styles from './contact.module.scss';
import globalStyles from '../../../styles/Home.module.scss';

import client from '../../../client';

const Contact: NextComponentType = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = (e.target as HTMLTextAreaElement | HTMLInputElement);
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })

  }


  return (
    <PortfolioWrap idName={'contact'} classNames={globalStyles.app__primarybg}>

      <div className={styles.app__contact}>
        <h2 className={globalStyles.headText}>Take a coffee and chat with me</h2>

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
          </div>
        ) : (
          <div>
            <h3 className={globalStyles.headText}>Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </PortfolioWrap>
  )
}

export default Contact;