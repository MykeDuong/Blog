import { NextComponentType } from 'next';
import { PortableText, PortableTextBlockComponent } from '@portabletext/react';
import React from 'react'

import styles from './Section.module.scss';

interface Props {
  title: string;
  body: any[];
}

const NormalComponent: PortableTextBlockComponent = ({children}) => {
  return <p className={styles.shortenedText}>{children}</p>
}

const H1Component: PortableTextBlockComponent = ({children}) => {
  return <h2 className={styles.shortenedText}>{children}</h2>
}

const H2Component: PortableTextBlockComponent = ({children}) => {
  return <h3 className={styles.shortenedText}>{children}</h3>
}

const H3Component: PortableTextBlockComponent = ({children}) => {
  return <h4 className={styles.shortenedText}>{children}</h4>
}

const H4Component: PortableTextBlockComponent = ({children}) => {
  return <h5 className={styles.shortenedText}>{children}</h5>
}

const PortableTextComponent = {
  block: {
    normal:  NormalComponent,
    h1: H1Component,
    h2: H2Component,
    h3: H3Component,
    h4: H4Component,
  }
}

const Section: NextComponentType<{}, {}, Props> = ({ title, body }) => {
  return (
    <div>
      <h1 className={styles.app__sectionHeader}>{title}</h1>
      <div className={styles.app__sectionBody}>
        <PortableText value={ body } components={ PortableTextComponent } />
      </div>
    </div>
  )
}

export default Section