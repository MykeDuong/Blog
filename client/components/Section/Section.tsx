import { NextComponentType } from 'next';
import { PortableText, PortableTextBlockComponent, PortableTextMarkComponent, PortableTextTypeComponent } from '@portabletext/react';
import Refractor from 'react-refractor'
import js  from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript';
import bash from 'refractor/lang/bash';
import tsx from 'refractor/lang/tsx';
import ts from 'refractor/lang/typescript';
import React from 'react'
import { urlFor } from '../../client';

import styles from './Section.module.scss';
import useStore from '../../store';
import Link from 'next/link';
import Image from 'next/future/image';

Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(bash);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(ts)

interface Props {
  title: string;
  body: any[];
  slug: string;
  language?: string;
}

// Var
let curTheme: boolean = true;

// Types
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

// Marks
const InlineCodeComponent: PortableTextMarkComponent = ({children}) => {
  return <code className={`${styles.app__sectionCode} ${curTheme ? styles.app__sectionCodeLight : styles.app__sectionCodeDark}`}>{children}</code>
}

const LinkComponent: PortableTextMarkComponent = ({children, value}) => {
  const rel = !value.href.startsWith('/') ? true : false;
  if (!rel) {
    return <Link href={value.href}><a className={`${styles.app__sectionLink} ${curTheme ? styles.app__sectionLinkLight : styles.app__sectionLinkDark}`}>{children}</a></Link>
  }
  return <a href={value.href} target="_blank" rel='noreferrer noopener' className={`${styles.app__sectionLink} ${curTheme ? styles.app__sectionLinkLight : styles.app__sectionLinkDark}`}>{children}</a>
}


// Code
interface CodeInterface {
  value: {
    code: string;
    language: string;
  }
}

const CodeSnippetComponent: PortableTextTypeComponent = (code: CodeInterface) => {
  let language;

  switch (code.value.language) {
    case "sh": {
      language = 'bash';
      break;
    }
    case "groq": {
      language = 'javascript';
      break;
    }
    case undefined: {
      language = 'javascript';
      break;
    }
    default: {
      language = code.value.language;
    }
  }

  return (
    <div className={styles.app__sectionCodeSnippet}>
      <Refractor value={code.value.code} language={language} />
    </div>
  )
}

// Image
const ImageCompoonent: PortableTextMarkComponent = ({ children, value }) => {
  console.log(value);
  return (
    <div
      className={styles.app__sectionImage}
    >
      <Image src={urlFor(value).url()} alt={value.alt} style={{ objectFit: "contain"}} fill />
    </div>
  )
}

const PortableTextComponent = {
  types: {
    code: CodeSnippetComponent,
    image: ImageCompoonent,
  },
  marks: {
    code: InlineCodeComponent,
    link: LinkComponent,
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
  const { theme } = useStore();

  curTheme = theme;

  return (
    <div id={slug} className={styles.app__section}>
      <h1 className={`${styles.app__sectionHeader} ${theme ? styles.app__sectionHeaderLight : styles.app__sectionHeaderDark}`}>{title}</h1>
      <div className={`${styles.app__sectionBody} ${theme ? styles.app__sectionBodyLight : styles.app__sectionBodyDark}`}>
        <PortableText value={ body } components={ PortableTextComponent } />
      </div>
    </div>
  )
}

export default Section