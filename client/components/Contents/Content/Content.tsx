import { NextComponentType } from 'next'
import React from 'react'
import Image from 'next/future/image';

import PostInterface from '../../../interfaces/PostInterface';
import Button from '../../Button/Button';
import ShortenedPortableText from '../../PortableText/ShortenedPortableText';
import styles from './Content.module.scss';

const Content: NextComponentType<{}, {}, {content: PostInterface}> = ({ content }) => {
  return (
    <div className={styles.app__content}>
      <div className={styles.imageBox}>
        <Image src={content.mainImageUrl} alt={`${content.title} main image`} className={styles.app__contentMainImage} fill />
      </div>
      <p className={styles.info}>{new Date(content._createdAt).toLocaleDateString()}  &nbsp; •  &nbsp; {content.author.name}</p>
      <h1 className={styles.contentTitle}>{content.title}</h1>
      <div className={styles.body}>
        <ShortenedPortableText value={content.body} />
      </div>
      <div className={styles.tags}>
        {content?.tags?.map((tag: { title: string; }) => (
          <Button type="tag" text={tag.title} key={`key of ${tag.title}`} />
        ))}
      </div>
      <div className={styles.app__contentFooter}>
        <Button text="Continue Reading" type="normal" />
      </div>
    </div>
  )
}

export default Content;