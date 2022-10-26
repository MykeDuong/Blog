import { NextComponentType } from 'next';
import { MdOutlineContentPaste } from 'react-icons/md';

import PostInterface from '../../interfaces/PostInterface';

import styles from './ContentList.module.scss';
import globalStyles from '../../styles/Home.module.scss';
import variables from '../../styles/variables.module.scss';

interface Props {
  contents: PostInterface[];
}

const Contents: NextComponentType<{}, {}, Props> = ({ contents }) => {

  console.log(contents);

  return (
    <div className={ styles.app__contentList }>
      <div className={styles.app__contentListTitle} >
        <MdOutlineContentPaste color={variables.grayColor}/><p className={`${globalStyles.pText} ${styles.title}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contents</p>
      </div>
      <ol className={styles.app__contentListItems}>
        {contents?.map((content) => (
          <li key={content._id} >
            <a href={`#${content.slug.current}`}>{content.title}</a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Contents;