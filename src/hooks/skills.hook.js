import { useSelector } from 'react-redux';
import SkillIcon from './../components/style-components/skills-icon/skill-icon';
import OtherSkill from './../components/style-components/skills-icon/other-skill';

export const useSkills = () => {
    const { skills: skillsGlobalStack } = useSelector(({ skills }) => ({ skills }))

    const global = (skills = []) => {
        return skills
            .filter(skill => skillsGlobalStack
                .some(stack => stack === skill))
            .map(skill =>
                <SkillIcon key={skill} skill={skill} />
            )
    }

    const other = (skills = []) => {
        return skills
            .filter(skill => !skillsGlobalStack
                .some(stack => stack === skill))
            .map(skill =>
                <OtherSkill key={skill} skill={skill} />
            )
    }

    return { global, other }
}