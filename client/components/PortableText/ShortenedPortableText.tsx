import { PortableText } from '@portabletext/react';
import React from 'react';

import styles from './ShortenedPortableText.module.scss';
import globalStyles from '../../styles/Home.module.scss';

interface Text {
  value: {
    children: any
  };
}

interface Props {
  value: any[];
}

const ShortenedPortableTextComponent = {
  block: {
    normal: ({ value }: Text) => <p className={styles.shortenedText}>{value.children[0].text}</p>,
  }
}

const ShortenedPortableText = ({ value }: Props) => {
  return <PortableText value={ value } components={ ShortenedPortableTextComponent } />
}

export default ShortenedPortableText;