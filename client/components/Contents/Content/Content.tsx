import { NextComponentType } from 'next'
import React from 'react'
import Image from 'next/future/image';

import PostInterface from '../../../interfaces/PostInterface';
import Button from '../../Button/';
import ShortenedPortableText from '../../ShortenedPortableText/ShortenedPortableText';
import styles from './Content.module.scss';
import useStore from '../../../store';

interface Props {
  content: PostInterface;
}

const Content: NextComponentType<{}, {}, Props> = ({ content }) => {
  const { theme } = useStore();
  return (
    <div className={`${styles.app__content} ${theme ? styles.app__contentLight : styles.app__contentDark}`} id={content.slug.current}>
      <div className={styles.imageBox}>
        <Image src={content.mainImageUrl} alt={`${content.title} main image`} className={styles.app__contentMainImage} fill />
      </div>
      <p className={`${styles.info} ${theme ? styles.infoLight : styles.infoDark}`}>{new Date(content._createdAt).toLocaleDateString()}  &nbsp; •  &nbsp; {content.author.name}</p>
      <h1 className={`${styles.contentTitle} ${theme ? styles.contentTitleLight : styles.contentTitleDark}`}>{content.title}</h1>
      <div className={styles.body}>
        <ShortenedPortableText value={content.body}/>
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