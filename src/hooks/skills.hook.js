import { useSelector } from 'react-redux';
import { difference, intersection } from 'lodash'

import SkillIcon from './../components/style-components/skills-icon/skill-icon';
import OtherSkill from './../components/style-components/skills-icon/other-skill';

export const useSkills = () => {
    const { skills: defaultSkillsStack } = useSelector(({ skills }) => ({ skills }))

    const defaultSkills = (skills = []) => {
        return intersection(skills, defaultSkillsStack).map(skill =>
            <SkillIcon key={skill} skill={skill} />
        )
    }

    const customSkills = (skills = []) => {
        return difference(skills, defaultSkillsStack).map(skill =>
            <OtherSkill key={skill} skill={skill} />
        )
    }

    return { defaultSkills, customSkills }
}