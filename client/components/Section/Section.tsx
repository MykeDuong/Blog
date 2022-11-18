import { NextComponentType } from 'next';
import { PortableText, PortableTextBlockComponent } from '@portabletext/react';
import Refractor from 'react-refractor'
import js  from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript';
import React from 'react'

import styles from './Section.module.scss';

Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);

interface Props {
  title: string;
  body: any[];
  slug: string;
  language?: string;
}

// Components
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

// Code
const JSCodeComponent = (props) => {
  console.log(props)
  return (
    <Refractor value={props.value.code} language={props.value.language} markers={props.highlightedLines} />
  )
}

const PortableTextComponent = {
  types: {
    code: JSCodeComponent,
  },
  block: {
    normal:  NormalComponent,
    h1: H1Component,
    h2: H2Component,
    h3: H3Component,
    h4: H4Component,
  }
}


const Section: NextComponentType<{}, {}, Props> = ({ title, body, slug }) => {
  return (
    <div id={slug} className={styles.app__section}>
      <h1 className={styles.app__sectionHeader}>{title}</h1>
      <div className={styles.app__sectionBody}>
        <PortableText value={ body } components={ PortableTextComponent } />
      </div>
    </div>
  )
}

export default Section