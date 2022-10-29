import { NextComponentType } from 'next'
import React from 'react'
import { PortableText } from '@portabletext/react';


import Button from '../../Button/Button';
import ShortenedPortableText from '../../PortableText/ShortenedPortableText';
import styles from './Content.module.scss';


interface Props {
  content: any;
}

const Content: NextComponentType<{}, {}, Props> = ({ content }) => {
  console.log(content);
  return (
    <div className={styles.app__content}>
      <img src={content.mainImageUrl} alt={`${content.title} main image`} className={styles.app__contentMainImage} />
      <p className={styles.info}>{new Date(content._createdAt).toLocaleDateString()}  &nbsp; •  &nbsp; {content.author.name}</p>
      <h1 className={styles.contentTitle}>{content.title}</h1>
      <div className={styles.body}>
        <ShortenedPortableText value={content.body} />
      </div>
      <div className={styles.app__contentFooter}>
        <Button width={200} height={50} text="Continue Reading" />
      </div>
    </div>
  )
}

export default Content;