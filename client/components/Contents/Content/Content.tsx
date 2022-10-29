import { NextComponentType } from 'next'
import React from 'react'
import { PortableText } from '@portabletext/react';

import ShortenedPortableText from '../../PortableText/ShortenedPortableText';
import styles from './Content.module.scss';


interface Props {
  content: any;
}

const Content: NextComponentType<{}, {}, Props> = ({ content }) => {
  return (
    <div className={styles.app__content}>
      <h1 className={styles.contentTitle}>{content.title}</h1>
      <ShortenedPortableText value={content.body} />
      <h3 className={styles.info}><em>Posted by {content.author.name} on {new Date(content._createdAt).toLocaleDateString()}</em></h3>
    </div>
  )
}

export default Content;