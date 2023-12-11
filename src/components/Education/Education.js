import uniqid from 'uniqid'
import { education } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

      <div className='education__grid'>
        {education.map((school) => (
          <ProjectContainer key={uniqid()} project={school} />
        ))}
      </div>
    </section>
  )
}

export default Education
