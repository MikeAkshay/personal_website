import uniqid from 'uniqid'
import { skills1 } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills1.length) return null

  const SkillJSX = () => (
    skills1.map(obj => {
       const [[key,skillsArr],index] = Object.entries(obj);
       return (
        <>
        <span key={index}><b>{key}</b></span>
        <ul className='skills__list'>
        {skillsArr.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
          ))}
       </ul>
        </>
        )
    })
  );
 
 return (
    <section className='section skills' id='skills'>
    <h2 className='section__title'>Skills</h2>
    <div className='sections center'>
    <SkillJSX/>
    </div>
    </section>
  )
}

export default Skills




