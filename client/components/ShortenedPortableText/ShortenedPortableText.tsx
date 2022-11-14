import { PortableText, PortableTextBlockComponent } from '@portabletext/react';
import React from 'react';

import styles from './ShortenedPortableText.module.scss';
import globalStyles from '../../styles/Home.module.scss';

interface Props {
  value: any[];
}

const NormalComponent: PortableTextBlockComponent = ({children}) => {
  return <p className={styles.shortenedText}>{children}</p>
}

const PortableTextComponent = {
  block: {
    normal: NormalComponent
  }
}

const ShortenedPortableText = ({ value }: Props) => {
  return <PortableText value={ value } components={ PortableTextComponent } />
}

export default ShortenedPortableText;