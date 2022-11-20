import { NextComponentType } from 'next';
import { MdOutlineContentPaste } from 'react-icons/md';

import PostInterface from '../../interfaces/PostInterface';

import styles from './ContentList.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import variables from '../../styles/variables.module.scss';
import Link from 'next/link';
import useStore from '../../store';

interface Props {
  contents: PostInterface[];
}

const ContentList: NextComponentType<{}, {}, Props> = ({ contents }) => {
  const { theme } = useStore();

  return (
    <div className={ `${styles.app__contentList} ${theme ? styles.app__contentListLight : styles.app__contentListDark}` }>
      <div className={`${styles.app__contentListTitle} ${theme ? styles.app__contentListTitleLight : styles.app__contentListTitleDark}`} >
        <MdOutlineContentPaste />
        <p className={`${globalStyles.pText} ${styles.title}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contents</p>
      </div>
      <ol className={`${styles.app__contentListItems} ${theme ? styles.app__contentListItemsLight : styles.app__contentListItemsDark}`}>
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