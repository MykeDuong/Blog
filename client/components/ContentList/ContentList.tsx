import { NextComponentType } from 'next';
import { MdOutlineContentPaste } from 'react-icons/md';

import PostInterface from '../../interfaces/PostInterface';

import styles from './ContentList.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import variables from '../../styles/variables.module.scss';
import Link from 'next/link';

interface Props {
  contents: PostInterface[];
}

const ContentList: NextComponentType<{}, {}, Props> = ({ contents }) => {

  return (
    <div className={ styles.app__contentList }>
      <div className={styles.app__contentListTitle} >
        <MdOutlineContentPaste color={variables.grayColor}/><p className={`${globalStyles.pText} ${styles.title}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contents</p>
      </div>
      <ol className={styles.app__contentListItems}>
        {contents?.map((content) => (
          <li key={`contentList ${content.title}`} >
            <Link href={`#${content.slug.current}`} scroll={false}>{content.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ContentList;