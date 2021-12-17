import { useSelector } from 'react-redux';
import { difference, intersection } from 'lodash'

import SkillIcon from './../components/style-components/skills-icon/skill-icon';
import OtherSkill from './../components/style-components/skills-icon/other-skill';

export const useSkills = () => {
    const { skills: skillsGlobalStack } = useSelector(({ skills }) => ({ skills }))

    const global = (skills = []) => {
        return intersection(skills, skillsGlobalStack).map(skill =>
            <SkillIcon key={skill} skill={skill} />
        )
    }

    const other = (skills = []) => {
        return difference(skills, skillsGlobalStack).map(skill =>
            <OtherSkill key={skill} skill={skill} />
        )
    }

    return { global, other }
}