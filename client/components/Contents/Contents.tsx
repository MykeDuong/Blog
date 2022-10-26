import { NextComponentType } from 'next'
import React from 'react'

import PostInterface from '../../interfaces/PostInterface';
import styles from './Contents.module.scss'

interface Props {
  contents: PostInterface[];
}

const Contents: NextComponentType<{}, {}, Props> = ({ contents }) => {
  return (
    <div className = { styles.app__contents }>
      Contents
    </div>
  )
}

export default Contents