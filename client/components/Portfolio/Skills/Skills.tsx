import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import Image from 'next/future/image';

import { urlFor } from '../../../client';
import { PortfolioWrap } from '../../wrappers';
import styles from './Skills.module.scss';
import globalStyles from '../../../styles/Home.module.scss';
import cssVar from '../../../styles/variables.module.scss';
import { NextComponentType } from 'next';
import SkillInterface from '../../../interfaces/SkillInterface';
import ExperienceInterface from '../../../interfaces/ExperienceInterface';
import useStore from '../../../store';

export interface PropsInterface {
  skills: SkillInterface[];
  experiences: ExperienceInterface[];
}

const Skills: NextComponentType<{}, {}, PropsInterface> = ({ skills, experiences }) => {
  const [tooltip, showTooltip] = useState(false);
  const { theme } = useStore();
  const validExperiences = experiences.filter(experience => (experience.works))

  useEffect(() => {
    showTooltip(false)
  }, [])

  return (
    <PortfolioWrap idName={'skills'} classNames={`${theme ? globalStyles.appLight : globalStyles.appDark}`}>

      <div className={styles.app__skills}>
        <h2 className={`${globalStyles.headText} ${theme ? globalStyles.headTextLight : globalStyles.headTextDark}`}>Skills & Experience</h2>

        <div className={styles.app__skillsContainer}>
          <motion.div
            className={styles.app__skillsList}
          >
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className={`${styles.app__skillsItems} ${globalStyles.app__flex} ${theme ? styles.app__skillsItemsLight : styles.app__skillsItemsDark}`}
                key={skill.name}
              >
                <div className={globalStyles.app__flex}>
                  <div>
                    <Image src={urlFor(skill.icon).url()} alt={skill.name} fill />
                  </div>
                </div>
                <p className={`${globalStyles.pText} ${theme ? globalStyles.pTextLight : globalStyles.pTextDark}`}>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.app__skillsExp}>
              {validExperiences?.map((experience) => (
                <motion.div
                  className={styles.app__skillsExpItem}
                  key={experience.year}
                >
                  <div className={styles.app__skillsExpYear}>
                    <p className={`${globalStyles.boldText}`} style={theme ? {color: cssVar.highlightColor} : {color: cssVar.highlightDarkColor}}>{experience.year}</p>
                  </div>
                  <motion.div className={styles.app__skillsExpWorks}>
                    {experience.works.map((work) => (
                      <div key={work.name}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className={styles.app__skillsExpWork}
                          data-tip
                          data-for={work.name}
                          
                          onMouseEnter={() => showTooltip(true)}
                          onMouseLeave={() => {
                            showTooltip(false);
                            setTimeout(() => showTooltip(true), 50);
                          }}
                        >
                          <h4 className={`${globalStyles.boldText} ${theme ? globalStyles.boldTextLight : globalStyles.boldTextDark}`}>{work.name}</h4>
                          <p className={`${globalStyles.pText}`} style={theme ? {color: cssVar.grayColor} : {color: cssVar.grayColor}}>{work.company}</p>
                        </motion.div>
                        {tooltip && <ReactTooltip
                          id={work.name}
                          effect="solid"
                          arrowColor='#fff'
                          className={styles.skillsTooltip}
                        >
                          <ul>
                            {work.desc.map(item => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </ReactTooltip>}
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </PortfolioWrap>

  )
}

export default Skills
