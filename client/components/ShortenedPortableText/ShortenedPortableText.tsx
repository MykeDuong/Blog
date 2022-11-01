import { PortableText } from '@portabletext/react';
import React from 'react';

import styles from './ShortenedPortableText.module.scss';
import globalStyles from '../../styles/Home.module.scss';

interface Props {
  value: any[];
}

const PortableTextComponent = {
  block: {
    normal: ({ children }: { children: any[] }) => <p className={styles.shortenedText}>{ children }</p>,
  }
}

const ShortenedPortableText = ({ value }: Props) => {
  return <PortableText value={ value } components={ PortableTextComponent } />
}

export default ShortenedPortableText;