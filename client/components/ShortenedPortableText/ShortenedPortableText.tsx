import { PortableText, PortableTextBlockComponent, PortableTextMarkComponent } from '@portabletext/react';
import React from 'react';

import styles from './ShortenedPortableText.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import useStore from '../../store';
import Link from 'next/link';

interface Props {
  value: any[];
}

let curTheme: boolean = true;


const NormalComponent: PortableTextBlockComponent = ({children}) => {
  return <p className={`${styles.shortenedText} ${curTheme ? styles.shortenedTextLight : styles.shortenedTextDark}`}>{children}</p>
}

const LinkComponent: PortableTextMarkComponent = ({children, value}) => {
  const rel = !value.href.startsWith('/') ? true : false;
  if (!rel) {
    return <Link href={value.href}><a className={`${styles.link} ${curTheme ? styles.linkLight : styles.linkDark}`}>{children}</a></Link>
  }
  return <a href={value.href} target="_blank" rel='noreferrer noopener' className={`${styles.link} ${curTheme ? styles.linkLight : styles.linkDark}`}>{children}</a>
}


const PortableTextComponent = {
  block: {
    normal: NormalComponent
  },
  marks: {
    link: LinkComponent,
  }
}

const ShortenedPortableText = ({ value }: Props) => {
  const { theme } = useStore();
  curTheme = theme;

  return <PortableText value={ value } components={ PortableTextComponent } />
}

export default ShortenedPortableText;