import { NextComponentType } from 'next'
import React from 'react'

import PostInterface from '../../interfaces/PostInterface';
import styles from './Contents.module.scss'

import Content from './Content/Content';

interface Props {
  contents: PostInterface[];
}

const Contents: NextComponentType<{}, {}, Props> = ({ contents }) => {
  console.log(contents);
  return (
    <div className = { styles.app__contents }>
      {contents?.map((content) => <Content content={ content }/>)}
    </div>
  )
}

export default Contents