import { useSelector } from 'react-redux';
import SkillIcon from './../components/style-components/skills-icon/skill-icon';
import OtherSkill from './../components/style-components/skills-icon/other-skill';

export const useSkills = () => {
    const { skills: skillsGlobalStack } = useSelector(({ skills }) => ({ skills }))
    let globalSkillsList = []
    let otherSkillsList = []

    const global = (skills) => {
        if (skills) {
            const globalSkills = skills.filter(skill =>
                skillsGlobalStack.some(stack => stack === skill))
            globalSkillsList = globalSkills.map(skill =>
                <SkillIcon key={skill} skill={skill} />)
        }

        return globalSkillsList.length > 0 ? globalSkillsList : []
    }

    const other = (skills) => {
        if (skills) {
            const otherSkills = skills.filter(skill =>
                !skillsGlobalStack.some(stack => stack === skill))
            otherSkillsList = otherSkills.map(skill =>
                <OtherSkill key={skill} skill={skill} />)
        }
        return otherSkillsList.length > 0 ? otherSkillsList : []
    }

    return { global, other }
}