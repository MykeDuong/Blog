import { PortableText, PortableTextBlockComponent } from '@portabletext/react';
import React from 'react';

import styles from './ShortenedPortableText.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import useStore from '../../store';

interface Props {
  value: any[];
}

let t: boolean = true;

const NormalComponent: PortableTextBlockComponent = ({children}) => {
  return <p className={`${styles.shortenedText} ${t ? styles.shortenedTextLight : styles.shortenedTextDark}`}>{children}</p>
}


const PortableTextComponent = {
  block: {
    normal: NormalComponent
  }
}

const ShortenedPortableText = ({ value }: Props) => {
  const { theme } = useStore();
  t = theme;
  return <PortableText value={ value } components={ PortableTextComponent } />
}

export default ShortenedPortableText;