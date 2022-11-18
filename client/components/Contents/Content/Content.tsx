import { NextComponentType } from 'next'
import React from 'react'
import Image from 'next/future/image';

import PostInterface from '../../../interfaces/PostInterface';
import Button from '../../Button/Button';
import CustomPortableText from '../../ShortenedPortableText/ShortenedPortableText';
import styles from './Content.module.scss';

interface Props {
  content: PostInterface;
}

const Content: NextComponentType<{}, {}, Props> = ({ content }) => {
  return (
    <div className={styles.app__content} id={content.slug.current}>
      <div className={styles.imageBox}>
        <Image src={content.mainImageUrl} alt={`${content.title} main image`} className={styles.app__contentMainImage} fill />
      </div>
      <p className={styles.info}>{new Date(content._createdAt).toLocaleDateString()}  &nbsp; •  &nbsp; {content.author.name}</p>
      <h1 className={styles.contentTitle}>{content.title}</h1>
      <div className={styles.body}>
        <CustomPortableText value={content.body}/>
      </div>
      <div className={styles.tags}>
        {content?.tags?.map((tag: { title: string; }) => (
          <Button type="tag" text={tag.title} key={`key of ${tag.title}`} link={`tags/#${tag.title}`} />
        ))}
      </div>
      <div className={styles.app__contentFooter}>
        <Button text="Continue Reading" type="normal" link={`/blogs/${content.slug.current}`} />
      </div>
    </div>
  )
}

export default Content;